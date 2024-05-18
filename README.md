### This project provides a JavaScript implementation of a linked list. The following methods are included:

- `append(value)`: Adds a new node containing the provided value to the end of the list.
- `prepend(value)`: Adds a new node containing the provided value to the start of the list.
- `size`: Returns the total number of nodes in the list.
- `listHead`: Returns the first node in the list.
- `listTail`: Returns the last node in the list.
- `atIndex(index)`: Returns the node at the given index.
- `nodePop`: Removes the last element from the list.
- `listContains(value)`: Returns `true` if the list contains the provided value, and `false` otherwise.
- `findIndex(value)`: Returns the index of the node containing the provided value, or `null` if the value is not found in the list.
- `toString`: Represents the LinkedList object as a string in the format `( value ) -> ( value ) -> ( value ) -> null`, which is useful for previewing the list in the console.
- `insertAt(value, index)`: Inserts a new node with the provided value at the given index.
- `removeAt(index)`: Removes the node at the given index.

## Usage

First, create a new LinkedList:

```javascript
const list = new LinkedList();
list.append('head'); // 0
list.append('node 1'); // 2
list.prepend('node 5'); // 1

console.log(`List size:  ${list.size()}`);
console.log(`Values in the linked list: ${list.toString()}`);
console.log(`List's head node is: '${list.listHead()}'`);
console.log(`List's tail node is: '${list.listTail()}'`);
console.log(`Node at index 3 is : ${list.atIndex(2)}`);
list.nodePop();
console.log(` ${list.listContains('node')}`);
console.log(`${list.findIndex('node 3')}`);
list.insertAt('inserted', 3);
list.removeAt(5);
```
