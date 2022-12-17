"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var puzzleData_1 = __importDefault(require("../puzzleData"));
var GRID_SIZE = 1000;
var grid = new Array(GRID_SIZE).fill(0).map(function () { return new Array(GRID_SIZE).fill(0); });
var rope = [
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
];
var instructions = puzzleData_1["default"].split("\n");
instructions.forEach(function (m) {
    var dir = m.split(" ")[0];
    var amount = parseInt(m.split(" ")[1]);
    for (var i = 0; i < amount; i++) {
        var lastHead = { x: rope[0].x, y: rope[0].y };
        switch (dir) {
            case "U":
                rope[0].y = rope[0].y - 1;
                break;
            case "D":
                rope[0].y = rope[0].y + 1;
                break;
            case "L":
                rope[0].x = rope[0].x - 1;
                break;
            case "R":
                rope[0].x = rope[0].x + 1;
                break;
        }
        for (var i_1 = 1; i_1 < rope.length; i_1++) {
            var diffX = rope[i_1 - 1].x - rope[i_1].x;
            var diffY = rope[i_1 - 1].y - rope[i_1].y;
            if (i_1 === 1 && (Math.abs(diffY) > 1 || Math.abs(diffX) > 1)) {
                rope[i_1].x = lastHead.x;
                rope[i_1].y = lastHead.y;
            }
            if (i_1 > 1 && (Math.abs(diffY) > 1 || Math.abs(diffX) > 1)) {
                var transitionY = 0;
                var transitionX = 0;
                if (diffY !== 0) {
                    transitionY = diffY > 0 ? 1 : -1;
                }
                if (diffX !== 0) {
                    transitionX = diffX > 0 ? 1 : -1;
                }
                rope[i_1].x = rope[i_1].x + transitionX;
                rope[i_1].y = rope[i_1].y + transitionY;
                if (i_1 === 9) {
                    grid[rope[9].y][rope[9].x] = 1;
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
});
var count = grid.flatMap(function (num) { return num; }).reduce(function (acc, num) { return acc += num; }, 0);
grid.forEach(function (row) {
    console.log(JSON.stringify(row));
});
// Add one to take first position into account
console.log('count', count + 1);
//# sourceMappingURL=index.js.map