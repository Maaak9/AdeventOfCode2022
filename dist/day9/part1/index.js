"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var puzzleData_1 = __importDefault(require("../puzzleData"));
var GRID_SIZE = 1000;
var grid = new Array(GRID_SIZE).fill(0).map(function () { return new Array(GRID_SIZE).fill(0); });
var head = { x: GRID_SIZE / 2, y: GRID_SIZE / 2 };
var tail = { x: GRID_SIZE / 2, y: GRID_SIZE / 2 };
var instructions = puzzleData_1["default"].split("\n");
instructions.forEach(function (m) {
    var dir = m.split(" ")[0];
    var amount = parseInt(m.split(" ")[1]);
    for (var i = 0; i < amount; i++) {
        var lastHead = { x: head.x, y: head.y };
        switch (dir) {
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
        var diffX = Math.abs(head.x - tail.x);
        var diffY = Math.abs(head.y - tail.y);
        if (diffY > 1 || diffX > 1) {
            tail = lastHead;
            grid[tail.y][tail.x] = 1;
        }
    }
});
var count = grid.flatMap(function (num) { return num; }).reduce(function (acc, num) { return acc += num; }, 0);
// Add one to take first position into account
console.log('count', count + 1);
//# sourceMappingURL=index.js.map