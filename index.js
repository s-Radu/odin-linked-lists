import LinkedList from './linkedList.js';

let list = new LinkedList();

list.append('head');
list.append('node1');
list.append('node2');
list.append('node3');
list.append('node4');

console.log(`List size:  ${list.size()}`);
console.log(`Values in the linked list: ${list.toString()}`);
