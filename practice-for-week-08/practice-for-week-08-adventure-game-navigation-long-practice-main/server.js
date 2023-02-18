const http = require("http");
const fs = require("fs");

const { Player } = require("./game/class/player");
const { World } = require("./game/class/world");

const worldData = require("./game/data/basic-world-data");

let player;
let world = new World();
world.loadWorld(worldData);

const server = http.createServer((req, res) => {
  /* ============== ASSEMBLE THE REQUEST BODY AS A STRING =============== */
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    // After the assembly of the request body is finished
    /* ==================== PARSE THE REQUEST BODY ====================== */
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    }

    /* ======================== ROUTE HANDLERS ========================== */
    // Phase 1: GET /
    if (req.method === "GET" && req.url === "/") {
      const htmlPage = fs.readFileSync("./views/new-player.html", "utf-8");
      let availableRoom = world.availableRoomsToString();
      let resBody = htmlPage.replace(/#{availableRooms}/g, availableRoom);
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(resBody);
      return;
    }

    // Phase 2: POST /player
    if (req.method === "POST" && req.url === "/player") {
      let { name, roomId } = req.body;
      const startingRoom = world.rooms[roomId];
      player = new Player(name, startingRoom);
      res.statusCode = 302;
      res.setHeader("Location", `/room/${roomId}`);
      res.end();
      return;
    }

    if (!player) {
      res.statusCode = 302;
      res.setHeader("Location", `/`);
      res.end();
      return;
    }

    // Phase 3: GET /rooms/:roomId

    if (req.method === "GET" && req.url.startsWith("/rooms/")) {
      let body = req.url.split("/");
      let roomId = body[2];
      const room = world.rooms[roomId];

      if (player.currentRoom !== room) {
        let correctRoomId;
        for (let potentialRoom in world.rooms) {
          if (world.rooms[potentialRoom].name === player.currentRoom.name) {
            correctRoomId = potentialRoom;
          }
        }
        res.statusCode = 302;
        res.setHeader("Location", `/rooms/${correctRoomId}`);
        res.end();
        return;
      }

      let htmlRooms = fs.readFileSync("./views/room.html", "utf-8");
      let resBody = htmlRooms
        .replace(/#{roomName}/g, `${room.name}`)
        .replace(/#{roomId}/g, `${room.id}`)
        .replace(/#{roomItems}/g, `${room.itemsToString()}`)
        .replace(/#{inventory}/g, `${player.inventoryToString()}`)
        .replace(/#{exits}/g, `${room.exitsToString()}`);

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(resBody);
      return;
    }

    // Phase 4: GET /rooms/:roomId/:direction

    if (req.method === "GET" && req.url.startsWith("/rooms/")) {
      if (req.url.split("/").length === 4) {
        const parts = req.url.split("/");
        const roomId = parts[2];
        const roomDirection = parts[3];
        const currentRoom = world.room[roomId];

        if (currentRoom !== player.currentRoom) {
          let correctRoomId;
          for (let room in world.rooms) {
            if (world.rooms[room].name === player.currentRoom.name) {
              correctRoomId = room;
            }
          }

          res.setHeader("location", `/rooms/${correctRoomId}`);
          res.statusCode = 302;
          return res.end();
        }

        player.move(roomDirection[0]);
        let newRoomId;
        for (let room in world.rooms) {
          if (world.rooms[room].name === player.currentRoom.name) {
            newRoomId = room;
          }
        }

        res.statusCode = 302;
        res.setHeader("Location", `/rooms/${newRoomId}`);
        res.end();
        return;
      }
    }

    // Phase 5: POST /items/:itemId/:action
    if (req.method === "POST" && req.url.startsWith("/items/")) {
      //get id of currentRoom
      let currentRoomId;
      for (let room in world.rooms) {
        if (world.rooms[room].name === player.currentRoom.name) {
          currentRoomId = room;
        }
      }

      let urlParts = req.url.split("/");
      let itemId = urlParts[2];
      let action = urlParts[3];

      switch (action) {
        case "take":
          player.takeItem(itemId);
          break;

        case "eat":
          player.eatItem(itemId);
          break;

        case "drop":
          player.dropItem(itemId);
          break;
      }
    }

    // Phase 6: Redirect if no matching route handlers
    let currentRoomId;
    for (let room in world.rooms) {
      if (world.rooms[room].name === player.currentRoom.name) {
        currentRoomId = room;
      }
    }

    res.setHeader("location", `/rooms/${currentRoomId}`);
    res.statusCode = 302;
    console.log("no matching handler");
    return res.end();
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
