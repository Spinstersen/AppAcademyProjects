const { SinglyLinkedNode } = require("./01-singly-linked-list");
class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
        // head 1 > 2 > 3 > 4 > 5 > "6" > null;
    enqueue(val) {
        // Add node to end of queue (linked list)
        let newTail = new SinglyLinkedNode(val);

        if (!this.head){
            this.head = newTail;
        }
         if(this.tail) {this.tail.next = newTail;}

        this.tail = newTail;
        this.length++;
        return this.length;



        // O(1)
    }
        // head 1 > 2 > 3 > 4 > tail
    dequeue() {
        // Remove node from front of queue (linked list)
        if(!this.head){
            return null;
        } else if (!this.head.next){
            const head = this.head.value;
            this.head = null;
            this.tail = null;
            this.length--;
            return head;
        } else {
        const head = this.head.value;
        this.head = this.head.next;
        this.length--;
        return head;
        }
        
        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
