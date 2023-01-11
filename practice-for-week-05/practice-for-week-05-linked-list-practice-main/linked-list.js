class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    let newNode = new LinkedListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
   let newNode = new LinkedListNode(val);
   let current = this.head;

  for (let i = 0 ; i < this.length-1 ; i++){
    current = current.next;
   }

   if (current){
    current.next = newNode;
   } else {
   this.head = newNode;
   }

   this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }
    
    console.log("NULL");
  }
}

module.exports = LinkedList;
