import puzzleData from "../puzzleData";

const GRID_SIZE = 1000;
let grid = new Array(GRID_SIZE).fill(0).map(() => { return new Array(GRID_SIZE).fill(0); });
let head = { x: GRID_SIZE / 2, y: GRID_SIZE / 2 };
let tail = { x: GRID_SIZE / 2, y: GRID_SIZE / 2 };

const instructions = puzzleData.split("\n");


instructions.forEach((m) => {
  const dir = m.split(" ")[0];
  const amount = parseInt(m.split(" ")[1]);

  for (let i = 0; i < amount; i++) {
    const lastHead = { x: head.x, y: head.y };
    switch(dir) {
      case "U":
        head.y = head.y - 1;
        break;
      case "D":
        head.y = head.y + 1;
        break;
      case "L":
        head.x = head.x - 1;
        break;
      case "R":
        head.x = head.x + 1;
        break;
    }

    let diffX = Math.abs(head.x - tail.x);
    let diffY = Math.abs(head.y - tail.y);

    if (diffY > 1 || diffX > 1) {
      tail = lastHead;
      grid[tail.y][tail.x] = 1
    }
  }
})

const count = grid.flatMap(num => num).reduce((acc, num) => acc += num, 0);

// Add one to take first position into account
console.log('count', count + 1);


