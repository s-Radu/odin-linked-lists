// We will need 2 classes or factories.

// 1. LinkedList class / factory, which will represent the full list.

// 2. Node calss / factory, containing a value property and a link to nextNode, set both as null by default.

export class Node {
	constructor(value) {
		this.value = null || value;
		this.nextNode = null;
	}
}

export class LinkedList {
	constructor(head = null) {
		this.head = head;
	}
}
