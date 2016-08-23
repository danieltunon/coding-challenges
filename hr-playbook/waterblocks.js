// calculate the number of blocks of water given the tower heights
// [2,0,4,1,2,3] --> 5
// [1,2,3,2,1] --> 0
// [2,0,1,0,3,1,0,2] --> 8
// [3,0,1,0,1,0,2,1] -- 8

function waterBlocks(blocks) {
  let boundary = blocks[0];
  const waterLevel = [];
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] > boundary) {
      boundary = blocks[i];
    }
    waterLevel[i] = boundary - blocks[i];
  }

  boundary = blocks[blocks.length - 1];

  for (let i = blocks.length - 1; i >= 0; i--) {
    if (blocks[i] > boundary) {
      boundary = blocks[i];
    }
    waterLevel[i] = Math.min(boundary - blocks[i], waterLevel[i]);
  }
  return waterLevel.reduce((sum, val) => sum + val);
}
