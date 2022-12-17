import puzzleData from "../puzzleData";

const GRID_SIZE = 1000;
let grid = new Array(GRID_SIZE).fill(0).map(() => { return new Array(GRID_SIZE).fill(0); });

let rope = [
  { x: GRID_SIZE / 2, y: GRID_SIZE / 2 },
  { x: GRID_SIZE / 2, y: GRID_SIZE / 2 },
  { x: GRID_SIZE / 2, y: GRID_SIZE / 2 },
  { x: GRID_SIZE / 2, y: GRID_SIZE / 2 },
  { x: GRID_SIZE / 2, y: GRID_SIZE / 2 },
  { x: GRID_SIZE / 2, y: GRID_SIZE / 2 },
  { x: GRID_SIZE / 2, y: GRID_SIZE / 2 },
  { x: GRID_SIZE / 2, y: GRID_SIZE / 2 },
  { x: GRID_SIZE / 2, y: GRID_SIZE / 2 },
  { x: GRID_SIZE / 2, y: GRID_SIZE / 2 },
]

const instructions = puzzleData.split("\n");


instructions.forEach((m) => {
  const dir = m.split(" ")[0];
  const amount = parseInt(m.split(" ")[1]);
  
  for (let i = 0; i < amount; i++) {
    let lastHead = { x: rope[0].x, y: rope[0].y };
    switch(dir) {
      case "U": rope[0].y = rope[0].y - 1; break;
      case "D": rope[0].y = rope[0].y + 1; break;
      case "L": rope[0].x = rope[0].x - 1; break;
      case "R": rope[0].x = rope[0].x + 1; break;
    }
    
    for (let i = 1; i < rope.length; i++) {
      let diffX = rope[i - 1].x - rope[i].x;
      let diffY = rope[i - 1].y - rope[i].y;

      if (i === 1 && (Math.abs(diffY) > 1 || Math.abs(diffX) > 1)) {
        rope[i].x = lastHead.x;
        rope[i].y = lastHead.y
      }
      if (i > 1 && (Math.abs(diffY) > 1 || Math.abs(diffX) > 1)) {
        let transitionY = 0;
        let transitionX = 0;
        if (diffY !== 0) {
          transitionY = diffY > 0 ? 1 : -1;
        }
        if (diffX !== 0) {
          transitionX = diffX > 0 ? 1 : -1;
        }

        rope[i].x = rope[i].x + transitionX
        rope[i].y = rope[i].y + transitionY
        if (i === 9) {
          grid[rope[9].y][rope[9].x] = 1
        }
      }
    }
  }
  // let test = new Array(GRID_SIZE).fill(0).map(() => { return new Array(GRID_SIZE).fill(0); });
  // rope.forEach((knot, index) => {
  //   const { x, y } = knot
  //   test[y][x] = index + 1;
  // })
  // test.forEach((row) => console.log(JSON.stringify(row)));
  // console.log('----');
})

const count = grid.flatMap(num => num).reduce((acc, num) => acc += num, 0);


grid.forEach((row) => {
  console.log(JSON.stringify(row));
})
// Add one to take first position into account
console.log('count', count + 1);


