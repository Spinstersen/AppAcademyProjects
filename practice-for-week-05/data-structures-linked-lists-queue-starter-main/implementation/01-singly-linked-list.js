// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 
        // Add node of val to head of linked list
        let newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;

        // O(1)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // O(n)

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        let current = this.head;
        for (let i = 0 ; i < this.length - 1 ; i++){
            current = current.next;
        }
        if (!current) {
            this.head = newNode;
        } else {
            current.next = newNode;
        }
        this.length++;
        return this;
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head){
            return undefined;
        }
        const head = this.head;
        this.head = this.head.next;
        this.length--;
        return head;
        // O(1)
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.head){
            return undefined;
        }
        let current = this.head;
        if(!this.head.next){
            this.head = null;
            this.length--;
            return this;
        }
        for (let i = 0 ; i < this.length-2; i++){
            current = current.next;
        }
        const tail = current.next;
        current.next = null;
        this.length--;
        return tail;
        
        // O(n)
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

    print() {
        // Print out the linked list
        if(!this.head){
            return;
        }
        let current = this.head;
        while(current){
            console.log(`${current.value}`);
            current = current.next;
        }
    
        // O(n)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
