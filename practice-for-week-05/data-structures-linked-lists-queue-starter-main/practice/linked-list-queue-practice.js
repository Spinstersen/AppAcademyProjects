// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        this.length++;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        let current = this.head; 
        let length = 0;
        while(current){
            current = current.next;
            length++;
        }
        return length; // O(n)
        // return this.length;
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let current = this.head; 
        let sum = 0;
        while(current){
            sum = sum + current.value;
            current = current.next;
            
        }
        return sum; // O(n)
        // O(n) since it goes through n values
    }

    averageValue() {
        // Returns the average value of all the nodes
        let current = this.head; 
        let sum = 0;
        while(current){
            sum = sum + current.value;
            current = current.next;
            
        }
        return sum/this.listLength();
        //  O(n) since it goes through n values + constant operation 
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let current = this.head; 
        
        for (let i = 0 ; i < n ; i++){
            current = current.next;
        }
        return current;
        // O(n)
    }

    findMid() {

        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
            let current = this.head; 
            
            for (let i = 0 ; i < Math.floor((this.listLength() - 1) / 2); i++){
                current = current.next;
            }
            return current;
        // O(n)
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let reversed = new SinglyLinkedList();
        let n = this.listLength();
        while ( n > 0 ){
            reversed.addToTail((this.findNthNode(n-1)).value);
            n--;
        }
        return reversed;
        // O(n)
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let current = this.head;
        let previous = null;

        while(current) {

            let next = current.next;
            if(next === null){this.head = current}

            current.next = previous;
            previous = current;
            current = next;
        }

        return this;
        // O(n)
    }
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
            let current = this.head; 
            let length = 0;
            while(current){
            current = current.next;
            length++;
            }
            let nodes = this.head;
            for (let i = 0 ; i < length / 2 ; i++){
                nodes = nodes.next;
            }
            if ( length % 2 === 0){
                return nodes.prev;
            } else {
                return nodes.prev;
            }

        // O(2n) => O(n)
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let reversed = new DoublyLinkedList;
        let current = this.head; 
        let length = 0;
        while(current){
        current = current.next;
        length++;
        }
        let nodes = this.tail;
        for (let i = 0 ; i < length ; i++){
            reversed.addToTail(nodes.value);
            nodes = nodes.prev;
        }
        return reversed;
        // O(2n) => O(n)
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        
        let current = this.head; 
        let length = 0;
        while(current){
        current = current.next;
        length++;
        }

        let nodes = this.head;
        this.head = this.tail;
        this.tail = nodes;
        let next;
        let prev = null;

        for (let i = 0 ; i < length ; i++){
            next = nodes.next;
            nodes.next = prev;
            prev = nodes;
            nodes = next;
        }
        return this;
        // O(n)
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
