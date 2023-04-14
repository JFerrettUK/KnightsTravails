export default function nodeClass(row, col, level = null, path = []) {
  class Node {
    constructor(row, col, level, path) {
      this.row = row;
      this.col = col;
      this.level = level;
      this.path = [...path, [row, col]];
    }

    getPositionString() {
      return `${this.row}, ${this.col}`;
    }
  }

  let newClass = new Node(row, col, level, path);

  return newClass;
}
