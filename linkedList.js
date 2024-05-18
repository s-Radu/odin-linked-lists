// We will need 2 classes or factories.

// 1. LinkedList class / factory, which will represent the full list.

// 2. Node calss / factory, containing a value property and a link to nextNode, set both as null by default.
class Node {
	constructor(value) {
		this.value = null || value;
		this.nextNode = null;
	}
}

export default class LinkedList {
	constructor(head = null) {
		this.head = head;
	}
}

//* The following functions needs built.

// append(value) adds a new node contaiing value to the end of the list.
// prepend(value) adds a new node containing value to the start of the list.
// size returns the total number of nodes in the list.
// head returns the first node in the list.
// tail returns the last node in the list.
// at(index) returns the node at the given index.
// pop removes the last element from the list.
// contains(value) returns true if the passed in value is the list and otherwise returns false.
// find(value) returns the index of the node containing value, or null if not found.
// toString represents the linkedList objects as strings, so we can print them out and preview them in the console. The format should be (value) -> (value) -> (value) -> null

LinkedList.prototype.append = function (value) {
	const node = new Node(value);
	if (!this.head) {
		this.head = node;
	} else {
		let current = this.head;
		while (current.nextNode) {
			current = current.nextNode;
		}
		current.nextNode = node;
	}
};

LinkedList.prototype.prepend = function (value) {
	const node = new Node(value);
	if (!this.head) {
		this.head = node;
	} else if (!this.head.nextNode) {
		this.head.nextNode = node;
	} else {
		node.nextNode = this.head.nextNode;
		this.head.nextNode = node;
	}
};

LinkedList.prototype.size = function () {
	let count = 0;
	let node = this.head;

	while (node) {
		count++;
		node = node.nextNode;
	}
	return count;
};

LinkedList.prototype.listHead = function () {
	return this.head ? this.head.value : 'no head in the list.';
};

LinkedList.prototype.listTail = function () {
	let node = this.head;
	if (node) {
		while (node.nextNode) {
			node = node.nextNode;
		}
	}
	return node.value;
};

LinkedList.prototype.atIndex = function (index) {
	if (!this.head) return 'No head to the list.';
	let node = this.head;
	for (let i = 0; i < index; i++) {
		if (!node.nextNode) return 'There is no node at the provided index.';
		node = node.nextNode;
	}
	return node.value;
};

LinkedList.prototype.nodePop = function () {
	if (!this.head) return 'List has no head.';
	if (!this.head.nextNode) return 'List contains only the head node.';

	let node = this.head,
		toBeDeleted;
	while (node.nextNode) {
		toBeDeleted = node;
		node = node.nextNode;
	}
	toBeDeleted.nextNode = null;
};

LinkedList.prototype.listContains = function (value) {
	if (!this.head) return 'No in the list.';
	let node = this.head;
	while (node) {
		if (node.value === value) {
			return true;
		}
		node = node.nextNode;
	}
	return false;
};

LinkedList.prototype.findIndex = function (value) {
	if (!this.head) return 'No head in the list.';
	let node = this.head;
	let index = 0;
	while (node) {
		if (node.value === value) {
			return `Index of ${value} is: ${index}`;
		}
		node = node.nextNode;
		index++;
	}
	return null;
};

LinkedList.prototype.toString = function () {
	let current = this.head;
	let string = '';
	while (current) {
		string = string.concat(`${current.value} -> `);
		current = current.nextNode;
	}
	string = string.concat('null');
	return string;
};

// The functions required for extra credit:

//* insertAt(value, index) that inserts a new node witht he provided value at the given index.
//* removeAt(index) that removes the node of the given index.

LinkedList.prototype.insertAt = function (value, index) {
	if (!this.head) return 'No list head.';

	let currentNode = this.head;
	let prevNode;
	const newNode = new Node(value);
	for (let i = 0; i < index; i++) {
		if (!currentNode.nextNode)
			return 'The index provided does not exist in the list.';
		prevNode = currentNode;
		currentNode = currentNode.nextNode;
	}
	prevNode.nextNode = newNode;
	newNode.nextNode = currentNode;
};
