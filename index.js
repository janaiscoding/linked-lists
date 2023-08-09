class LinkedList {
  constructor() {
    this.head = new Node();
  }
  append(value) {
    let newNode = new Node(value);
    if (this.head.value === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let size = 0;
    let current = this.head;
    while (current !== null) {
      size++;
      current = current.next;
    }
    return size;
  }

  getHead() {
    return this.head.value;
  }

  getTail() {
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    return tail.value;
  }
  at(index) {
    let counter = 0;
    let current = this.head;
    while (counter < index) {
      if (current.next !== null) {
        current = current.next;
      }
      counter++;
    }
    return current.value;
  }
  pop() {
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
  }

  contains(value) {
    let current = this.head;
    while (current.next !== null) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.value === value) {
        return `Found at index: ${index}`;
      } else {
        current = current.next;
        index++;
      }
    }
    return `Was not found.`;
  }
  toString() {
    let string = "";
    let current = this.head;
    while (current.next !== null) {
      string += `${current.value} -> `;
      current = current.next;
    }
    string += current.value; // tail
    return `${string} -> null`;
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}
const newList = new LinkedList();
newList.append("start");
newList.append(3);
newList.append("meow");
console.log(newList.toString()); //start -> 3 -> meow -> null
console.log(newList.size()); // 3
console.log(newList.getHead()); // start
console.log(newList.getTail()); // meow
console.log(newList.at(1)); // 3
newList.prepend("hey");
console.log(newList.contains(3)); // true
console.log(newList.contains("purple")); //false
console.log(newList.find("meow")); // Found at index: 3
console.log(newList.toString()); // hey -> start -> 3 -> meow -> null
newList.pop();
newList.pop();
console.log(newList.toString()); // hey -> start -> null
