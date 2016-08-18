function findMedianSortedArrays(array1, array2) {
  if (/* some base case */) {

  }


}

function sortedArrayMedian(array) {
  const size = array.length;
  if (size % 2 === 0) {
    return (array[size / 2] + array[size / 2 + 1]) / 2;
  }
  return array[Math.floor(size / 2)];
}

function binarySearch(value, array) {
  let start = 0;
  let end = array.length - 1;
  let mid = Math.floor(end / 2);
  while (start !== end) {
    if (value > array[mid]) {
      start = mid + 1;
    } else if (value < array[mid]) {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
}

[1, 2, 8, 12, 13] [2, 4, 6] --> [1, 2, 2, 2, 2, 3, 4, 6] --> 2
2 < m < 4 --> [2, 2, 2, 3] [2, 4]
2 < m < 3 --> [2, 2, 2, 3] [2] --> the two medians are the same

[1, 2, 8, 12, 13] [1, 2, 4, 6] --> [1, 1, 2, 2, 4, 6, 8, 12, 13] --> 4
3 < m < 8 --> [1, 2, 8] [4, 6] ???
2 < m < 5 --> [2, 8] [4]

[1, 2, 8, 12, 13] [1, 2, 4, 6] --> [1, 1, 2, 2, 4, 6, 8, 12, 13] --> 4
3 < m < 8 --> [8] [2, 4, 6]

[1, 2, 8, 12, 13] [3, 5, 10, 16] --> [1, 2, 3, 5, 8, 10, 12, 13, 16] --> 8
8 < m < 7.5 --> [8] [] ????

[2, 6, 15, 20] [1, 3, 10, 11, 12] --> [1, 2, 3, 6, 10, 11, 12, 15, 20] --> 10
10.5 < m < 10 same as before

[1, 2, 3, 4] [8, 9, 10, 11, 12] --> [1, 2, 3, 4, 8, 9, 10, 11, 12] --> 8
2.5 < m < 10 --> [3, 4] [8, 9, 10]
3.5 < m < 9 --> [4] [8, 9]
