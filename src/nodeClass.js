export default function nodeClass(row, column, level = null) {
  class Node {
    constructor(row, column, level) {
      this.row = row;
      this.column = column;
      this.level = level;
    }

    getPositionString() {
      return `${this.level}, ${this.column}`;
    }
  }

  let newClass = new Node(row, column, level);

  return newClass;
}
