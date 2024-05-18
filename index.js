import LinkedList from './linkedList.js';

let list = new LinkedList();

list.append('head'); // 0
list.append('node 1'); // 2
list.append('node 2'); // 3
list.append('node 3'); // 4
list.append('node 4'); // 5
list.prepend('node 5'); // 1

console.log(`List size:  ${list.size()}`);
console.log(`Values in the linked list: ${list.toString()}`);
console.log(`List's head node is: '${list.listHead()}'`);
console.log(`List's tail node is: '${list.listTail()}'`);
console.log(`Node at index 3 is : ${list.atIndex(2)}`);
list.nodePop();
console.log(`Values in the linked list: ${list.toString()}`);
console.log(` ${list.listContains('node')}`);
console.log(`${list.findIndex('node 3')}`);
list.insertAt('inserted', 3);
list.insertAt('another insert', 5);
console.log(`Values in the linked list: ${list.toString()}`);
list.removeAt(5);
console.log(`Values in the linked list: ${list.toString()}`);
