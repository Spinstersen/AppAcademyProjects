// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to head of linked list
        const newNode = new DoublyLinkedNode(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
    const newNode = new DoublyLinkedNode(val);

    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
      else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }

      this.length++;
        // Write your hypothesis on the time complexity of this method here
    }                      
    removeFromHead() {
        // Remove node at head
        if (!this.head ){
            return undefined;
        }
        const head = this.head.value;
        if (this.head.next){
        this.head = this.head.next;
        this.head.prev = null;
        } else {
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return head;
        // O(1)
    }
                                //tail
          // head : 1 > 2 > 3 > 4 > 5 > null
    removeFromTail() {
        // Remove node at tail
        if (!this.head){
            return undefined;
        }
        const tail = this.tail.value;
        this.tail = this.tail.prev;
        this.length--;
        return tail;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
            // Return value of head node
            if (this.head){
                return this.head.value;
            } else if (!this.head){
                return undefined;
            }
            // O(1)
        }

    peekAtTail() {
        // Return value of tail node
        if (this.tail){
            return this.tail.value;
        } else if (!this.head && !this.tail){
            return undefined;
        }
        // O(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
