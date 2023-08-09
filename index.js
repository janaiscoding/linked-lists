class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}
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
  insertAt(index, value) {
    let newNode = new Node(value);
    let counter = 0;
    let current = this.head;

    while (counter + 1 !== index) {
      if (current.next === null) {
        // console.log("Cannot insert at this position")
        this.append(value);
        return;
      }
      current = current.next;
      counter++;
    }
    if (counter + 1 === index) {
      console.log(current.next);
      newNode.next = current.next;
      current.next = newNode;
    }
  }
  removeAt(index) {
    let counter = 0;
    let current = this.head;
    if (index === 0) {
      this.head = this.head.next;
    }
    while (counter + 1 < index) {
      if (current.next === null) return;
      counter++;
      current = current.next;
    }
    if (index === counter + 1) {
      current.next = current.next.next;
    }
  }
}

const newList = new LinkedList();
newList.append("start");
newList.append(3);
newList.append("meow");
// console.log(newList.toString()); //start -> 3 -> meow -> null
// console.log(newList.size()); // 3
// console.log(newList.getHead()); // start
// console.log(newList.getTail()); // meow
// console.log(newList.at(1)); // 3
// newList.prepend("hey");
// console.log(newList.contains(3)); // true
// console.log(newList.contains("purple")); //false
// console.log(newList.find("meow")); // Found at index: 3
// console.log(newList.toString()); // hey -> start -> 3 -> meow -> null
// newList.pop();
// newList.pop();
// newList.insertAt(6, "hey");
newList.append("new");
newList.append("list");
newList.removeAt(9);
console.log(newList.toString());
