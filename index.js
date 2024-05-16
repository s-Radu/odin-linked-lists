import LinkedList from './linkedList.js';

let list = new LinkedList();

list.append('head');
list.append('node 1');
list.append('node 2');
list.append('node 3');
list.append('node 4');
list.prepend('node 5');

console.log(`List size:  ${list.size()}`);
console.log(`Values in the linked list: ${list.toString()}`);
console.log(`List's head node is: '${list.listHead()}'`);
// console.log(`List's tail node is: '${list.listTail()}'`);
