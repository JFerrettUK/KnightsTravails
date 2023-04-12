export default function nodeClass(start_x, column, level = null) {
  class Node {
    constructor(row, column, level) {
      this.row = row;
      this.column = column;
      this.level = level;
    }
  }

  let newClass = new Node(row, column, level);

  return newClass;
}
