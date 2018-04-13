// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, nextNode = null) {
    this.data = data;
    this.next = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    if(this.head) {
      this.head = new Node(data, this.head);
    } else {
      this.head = new Node(data,null);
    }
  }

  size() {
    let counter = 0;
    let current = this.head;
    while (current) {
      counter++;
      current = current.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let current = this.head;
    while (current) {
      if (current.next) {
        current = current.next;
      } else {
        return current;
      }
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    let current = this.head;
    let prev = current;
    while (current) {
      if (!current.next && current === this.head) {
        this.head = null;
      }
      if (!current.next) {
        prev.next = null;
        break;
      } else {
        prev = current;
        current = current.next;
      }

    }
  }

  insertLast(data) {
    let current;
    if (this.head) {
      current = this.head;
    } else {
      let newNode = new Node(data);
      this.head = newNode;
    }

    while (current) {
      if (!current.next) {
        let newNode = new Node(data);
        current.next = newNode;
        break;
      } else {
        current = current.next;
      }
    }
  }

  getAt(index) {
    let counter = 0;
    let current = this.head;

    while (counter < index) {
      if (!current || !current.next) {
        return null;
      }
      current = current.next;
      counter++;
    }
    if (counter === index) {
      return current;
    }
  }

  removeAt(index) {
    let counter = 0;
    let current = this.head;
    let prev = current;
    while (counter < index) {
      if (!current) {
        return;
      }
      current = current.next;
      counter++;
    }

    if (counter === index) {
      if (!current) {
        return;
      }

      if (current.next) {
        if (index === 0) {
          this.head = current.next;
        }
        prev.next = current.next;

      } else {
        prev.next = null;
      }
    }
  }

  insertAt(data, index) {
    let counter = 0;
    if (!this.head) {
      this.insertFirst(data);
      return;
    }
    let current = this.head;
    let prev = current;

    while (counter < index) {
      prev = current;
      current = current.next;
      if (!current.next) {
        this.insertLast(data);
        return;
      }
      counter++;
    }
    if (counter === index) {
      let newNode = new Node(data, current);
      if (index === 0) {
        this.head = newNode;
      } else {
        prev.next = newNode;

      }
    }
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
}

module.exports = { Node, LinkedList };
