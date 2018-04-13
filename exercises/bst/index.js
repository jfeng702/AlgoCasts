// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }

    if (this.data > data && this.left) {
      return this.left.contains(data);
    } else if (this.data < data && this.right) {
      return this.right.contains(data);
    }
    
    return null;
  }

  insert(data) {
  //   let newNode = new Node(data);
  //   let current = this;
  //
  //   while (current.left && current.right) {
  //     if (current.left && data < current.left.data) {
  //       current = current.left;
  //     } else if (current.right && data > current.left.data) {
  //       current = current.right;
  //     }
  //   }
  //   if (data < current.data) {
  //     current.left = newNode;
  //   } else if (data > current.data) {
  //     current.right = newNode;
  //   }
  // }
    if (this.left && data < this.data) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    }

    if (this.right && data > this.data) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }


}

module.exports = Node;
