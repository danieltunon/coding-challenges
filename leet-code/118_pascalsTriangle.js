// Recursive Implementation
function pascal(n) {
  const triangle = [];
  function triangulate(row) {
    if (row > n || n <= 0) return;
    const currRow = [1];
    for (let col = 1; col <= row; col++) {
      currRow.push(
        triangle[row - 1][col - 1] +
        (triangle[row - 1][col] || 0));
    }
    triangle.push(currRow);
    triangulate(row + 1);
  }
  triangulate(0);
  return triangle;
}

console.log(pascal(8));
