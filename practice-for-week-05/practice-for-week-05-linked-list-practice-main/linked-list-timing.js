const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

let n = 9999999;


// Single Linked List addToHead - O(1) - Variable creation, assignment and arithmetics
// O(n) with for loop consideration
const singlelinkedlist1 = new LinkedList();

const singlelistedBenchmarkStartTime = Date.now();
for (let i = 1; i <= n; i++) {
    singlelinkedlist1.addToHead(i);
}
const singlelistedBenchmarkEndTime = Date.now();

console.log(`Single linked list Head takes ${singlelistedBenchmarkEndTime - singlelistedBenchmarkStartTime}ms`);

// Single Linked List addToTail - O(n)
// O(n^2) for n tails
const singlelinkedlist2 = new LinkedList();

const singlelinkedlistStartTime = Date.now();
for (let i = 1; i <= n; i++) {
    singlelinkedlist2.addToTail(i);
}
const singlelinkedlistEndTime = Date.now();

console.log(`Single linked list Tail takes ${singlelinkedlistEndTime - singlelinkedlistStartTime}ms`);

// Double Linked List addToHead - O(1)
// O(n) for n number of heads added
const doubleLinkedList1 = new DoublyLinkedList();

const benchmarkStartTime = Date.now();
for (let i = 1; i <= n; i++) {
  doubleLinkedList1.addToHead(i);
}
const benchmarkEndTime = Date.now();

console.log(`double linked list Head takes ${benchmarkEndTime - benchmarkStartTime}ms`);

// Double Linked List addToTail - O(1)
// O(n) for n of entries to the linked list

const doubleLinkedList2 = new DoublyLinkedList();

const benchmark2StartTime = Date.now();
for (let i = 1; i <= n; i++) {
  dll2.addToTail(i);
}
const benchmark2EndTime = Date.now();

console.log(`double linked list tails takes ${benchmark2EndTime - benchmark2StartTime}ms`);
