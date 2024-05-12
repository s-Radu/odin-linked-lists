import {LinkedList, Node} from './linkedList.js';

let node1 = new Node('test');
let node2 = new Node('test1');
node1.next = node2;

let list = new LinkedList(node1);

console.log('test');
console.log(list.size());
console.log('after test');
