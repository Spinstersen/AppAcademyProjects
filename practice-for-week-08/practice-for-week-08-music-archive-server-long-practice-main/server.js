const http = require("http");
const fs = require("fs");

/* ============================ SERVER DATA ============================ */
let artists = JSON.parse(fs.readFileSync("./seeds/artists.json"));
let albums = JSON.parse(fs.readFileSync("./seeds/albums.json"));
let songs = JSON.parse(fs.readFileSync("./seeds/songs.json"));

let nextArtistId = 2;
let nextAlbumId = 2;
let nextSongId = 2;

// returns an artistId for a new artist
function getNewArtistId() {
  const newArtistId = nextArtistId;
  nextArtistId++;
  return newArtistId;
}

// returns an albumId for a new album
function getNewAlbumId() {
  const newAlbumId = nextAlbumId;
  nextAlbumId++;
  return newAlbumId;
}

// returns an songId for a new song
function getNewSongId() {
  const newSongId = nextSongId;
  nextSongId++;
  return newSongId;
}

/* ======================= PROCESS SERVER REQUESTS ======================= */
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // assemble the request body
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    // finished assembling the entire request body
    // Parsing the body of the request depending on the "Content-Type" header
    if (reqBody) {
      switch (req.headers["content-type"]) {
        case "application/json":
          req.body = JSON.parse(reqBody);
          break;
        case "application/x-www-form-urlencoded":
          req.body = reqBody
            .split("&")
            .map((keyValuePair) => keyValuePair.split("="))
            .map(([key, value]) => [key, value.replace(/\+/g, " ")])
            .map(([key, value]) => [key, decodeURIComponent(value)])
            .reduce((acc, [key, value]) => {
              acc[key] = value;
              return acc;
            }, {});
          break;
        default:
          break;
      }
      console.log(req.body);
    }

    /* ========================== ROUTE HANDLERS ========================== */

    // Your code here
    let deleteMessage = { message: "Successfully deleted" };

    // Get all the artists
    if (req.method === "GET" && req.url === "/artists") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify(artists));
    }

    // Get a specific artist's details based on artistId

    if (req.method === "GET" && req.url.startsWith("/artists")) {
      const urlParts = req.url.split("/");

      if (urlParts.length === 3) {
        const artistId = urlParts[2];
        const artist = artists[artistId];

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(artist));
      }
    }

    //Add an artist
    if (req.method === "POST" && req.url === "/artists") {
      const newId = getNewArtistId();
      const artistObj = req.body;
      let artistInfo = { artistId: newId, name: artistObj.name };
      artists[newId] = artistInfo;
      fs.writeFileSync(
        "./seeds/artists.json",
        JSON.stringify(artists, null, 2)
      );

      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");

      res.write(JSON.stringify(artistInfo));
      return res.end();
    }
    //Edit a specified artist by artistId
    if (
      (req.method === "PATCH" || req.method === "PUT") &&
      req.url.startsWith("/artists")
    ) {
      let urlParts = req.url.split("/");
      if (urlParts.length === 3) {
        const artistId = urlParts[2];
        const artistObj = req.body;
        artists[artistId].name = artistObj.name;
        let date = Date();
        let artistInfo = {
          artistId: artistId,
          name: req.body.name,
          updatedAt: date,
        };
        fs.writeFileSync(
          "./seeds/artists.json",
          JSON.stringify(artists, null, 2)
        );
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(artistInfo));
        return res.end();
      }
    }

    //Delete a specified artist by artistId
    if (req.method === "DELETE" && req.url.startsWith("/artists")) {
      let urlParts = req.url.split("/");
      if (urlParts.length === 3) {
        const artistId = urlParts[2];
        delete artists[artistId];

        fs.writeFileSync(
          "./seeds/artists.json",
          JSON.stringify(artists, null, 2)
        );

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(deleteMessage));
        return res.end();
      }
    }

    // Get all albums of a specific artist based on artistId

    if (
      req.method === "GET" &&
      req.url.startsWith("/artists") &&
      req.url.endsWith("albums")
    ) {
      const urlParts = req.url.split("/");

      const artistId = urlParts[2];

      let albumInfo = {};

      for (let id in albums) {
        let album = albums[id];

        if (album.artistId === Number(artistId)) {
          albumInfo[id] = album;
        }
      }

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify(albumInfo));
    }

    // Get a specific album's details based on albumId

    if (req.method === "GET" && req.url.startsWith("/albums/")) {
      const urlParts = req.url.split("/");
      const albumId = urlParts[2];
      const albumDetails = albums[albumId];

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(albumDetails));
      return res.end();
    }

    //  Add an album to a specific artist based on artistId

    if (
      req.method === "POST" &&
      req.url.startsWith("/artists/" && req.url.endsWith("albums"))
    ) {
      const urlParts = req.url.split("/");
      const artistId = urlParts[2];
      albums[getNewAlbumId()].name = req.body.name;
      albums[getNewAlbumId()].artistId = Number(artistId);

      const albumInfo = {
        albumId: getNewAlbumId(),
        name: req.body.name,
        artistId: Number(artistId),
      };

      fs.writeFileSync("./seeds/artists.json", JSON.stringify(albums, null, 2));

      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(albumInfo));
      return res.end();
    }

    // Edit a specified album by albumId

    if (
      (req.method === "PUT" || req.method === "PATCH") &&
      req.url.startsWith("/albums/")
    ) {
      const urlParts = req.url.split("/");
      const albumIds = urlParts[2];
      albums[albumIds].name = req.body.name;
      let date = Date();
      let albumInfo = {
        albumId: albumIds,
        name: req.body.name,
        artistId: albums[albumIds].artistId,
        updatedAt: date,
      };

      fs.writeFileSync("./seeds/albums.json", JSON.stringify(albums, null, 2));
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(albumInfo));
      return res.end();
    }

    // Delete a specified album by albumId
    if (req.method === "DELETE" && req.url.startsWith("/albums/")) {
      let urlParts = req.url.split("/");
      if (urlParts.length === 3) {
        const albumId = urlParts[2];
        delete albums[albumId];

        fs.writeFileSync(
          "./seeds/albums.json",
          JSON.stringify(albums, null, 2)
        );

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(deleteMessage));
        return res.end();
      }
    }

    // Get all songs of a specific artist based on artistId

    if (
      req.method === "GET" &&
      req.url.startsWith("/artists/") &&
      req.url.endsWith("songs")
    ) {
      const urlParts = req.url.split("/");
      const artistId = urlParts[2];
      let artistSongs = {};
      for (id in songs) {
        let song = songs[id];

        if (albums[song.albumId].artistId === Number(artistId)) {
          artistSongs[id] = song;
        }
      }

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(artistSongs));
      return res.end();
    }
    // Get all songs of a specific album based on albumId
    if (
      req.method === "GET" &&
      req.url.startsWith("/albums/") &&
      req.url.endsWith("songs")
    ) {
      const urlParts = req.url.split("/");
      const albumId = urlParts[2];
      let artistSongs = {};
      for (id in songs) {
        let song = songs[id];

        if (songs.albumId === Number(albumId)) {
          artistSongs[id] = song;
        }
      }

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(artistSongs));
      return res.end();
    }
    // get songds with the tracknumber

    if (req.method === "GET" && req.url.startsWith("/trackNumbers/")) {
      const urlParts = req.url.split("/");

      if (urlParts.length === 4) {
        const trackNumber = urlParts[2];
        const trackSongs = {};

        for (let id in songs) {
          let song = songs[id];

          if ((song.trackNumber = Number(trackNumber))) {
            trackSongs[id] = song;
          }
        }

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(trackSongs));
      }
    }
    // ### Get a specific song's details based on songId

    if (req.method === "GET" && req.url.startsWith("/songs/")) {
      const urlParts = req.url.split("/");

      if (urlParts.length === 3) {
        const songId = urlParts[2];

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(songs[songId]));
      }
    }
    // Add a song to a specific album based on albumId

    if (req.method === "POST" && req.url.startsWith("/albums/")) {
      const urlParts = req.url.split("/");

      if (urlParts.length === 4) {
        const albumId = urlParts[2];
        const nextSongId = getNewSongId();

        songs[nextSongId] = {
          songId: nextSongId,
          albumId: Number(albumId),
          ...req.body,
        };
        fs.writeFileSync("./seeds/songs.json", JSON.stringify(songs, null, 2));
        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(songs[nextSongId]));
      }
    }

    // edit a specified song by SongId

    if (req.method === "PATCH" && req.url.startsWith("/songs")) {
      const urlParts = req.url.split("/");

      if (urlParts.length === 3) {
        const songId = urlParts[2];
        const albumId = songs[songId].albumId;

        songs[songId] = {
          songId: Number(songId),
          albumId: Number(albumId),
          ...req.body,
        };

        fs.writeFileSync("./seeds/songs.json", JSON.stringify(songs, null, 2));
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(songs[songId]));
      }
    }

    // delete a specified song by songId
    if (req.method === "DELETE" && req.url.startsWith("/songs/")) {
      const urlParts = req.url.split("/");

      if (urlParts.length === 3) {
        const songId = urlParts[2];

        delete songs[songId];
        fs.writeFileSync("./seeds/songs.json", JSON.stringify(songs, null, 2));
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(deleteMessage));
      }
    }

    // display Error in case of wrong Endpoint// ------------------------

    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.write("Endpoint not found");
    return res.end();
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
