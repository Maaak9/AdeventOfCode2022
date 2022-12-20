"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var puzzleData_1 = __importDefault(require("../puzzleData"));
var testData_1 = __importDefault(require("../testData"));
var instructions = puzzleData_1["default"].split("\n");
var testInstructions = testData_1["default"].split("\n");
var display = [];
var getDisply = function (cycles, instructions) {
    var xRegister = 1;
    var cyclesPassed = 0;
    var print = function () {
        if (cyclesPassed % 40 >= (xRegister - 1 % 40) && cyclesPassed % 40 <= ((xRegister + 1) % 40)) {
            display.push("#");
        }
        else {
            display.push(".");
        }
    };
    for (var i = 0; i < instructions.length; i++) {
        var instruction = instructions[i];
        if (instruction.includes("noop")) {
            print();
            cyclesPassed++;
        }
        if (instruction.includes("addx")) {
            for (var y = 0; y < 2; y++) {
                print();
                cyclesPassed++;
            }
            if (cyclesPassed < cycles) {
                xRegister = xRegister + parseInt(instructions[i].split(" ")[1]);
            }
        }
        if (cyclesPassed > cycles)
            return;
    }
    // return xRegister * cycles;
};
// getDisply(240, testInstructions)
// const testRow1 = display.slice(0,40);
// const testRow2 = display.slice(40, 80);
// const testRow3 = display.slice(80, 120);
// const testRow4 = display.slice(120, 160);
// const testRow5 = display.slice(160, 200);
// const testRow6 = display.slice(200, 240);
// const convertedTestDisplay = [ testRow1, testRow2, testRow3, testRow4, testRow5, testRow6 ];
// convertedTestDisplay.forEach((row) => {
//   console.log(row.join(""));
// })
// console.log('---------');
getDisply(240, instructions);
var row1 = display.slice(0, 40);
var row2 = display.slice(40, 80);
var row3 = display.slice(80, 120);
var row4 = display.slice(120, 160);
var row5 = display.slice(160, 200);
var row6 = display.slice(200, 240);
var convertedDisplay = [row1, row2, row3, row4, row5, row6];
convertedDisplay.forEach(function (row) {
    console.log(row.join(""));
});
//# sourceMappingURL=index.js.map