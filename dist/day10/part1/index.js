"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var puzzleData_1 = __importDefault(require("../puzzleData"));
var testData_1 = __importDefault(require("../testData"));
var instructions = puzzleData_1["default"].split("\n");
var testInstructions = testData_1["default"].split("\n");
var findSignalStrengthAtCycle = function (cycles, instructions) {
    var xRegister = 1;
    var cyclesPassed = 0;
    for (var i = 0; i < instructions.length; i++) {
        var instruction = instructions[i];
        if (instruction.includes("noop")) {
            cyclesPassed++;
        }
        if (instruction.includes("addx")) {
            cyclesPassed = cyclesPassed + 2;
            if (cyclesPassed < cycles) {
                xRegister = xRegister + parseInt(instructions[i].split(" ")[1]);
            }
        }
    }
    return xRegister * cycles;
};
var testSignal20 = findSignalStrengthAtCycle(20, testInstructions);
console.log('testSignal20', testSignal20);
var testSignal60 = findSignalStrengthAtCycle(60, testInstructions);
console.log("testSignal60", testSignal60);
var testSignal100 = findSignalStrengthAtCycle(100, testInstructions);
console.log('testSignal100', testSignal100);
var testSignal140 = findSignalStrengthAtCycle(140, testInstructions);
console.log('testSignal140', testSignal140);
var testSignal180 = findSignalStrengthAtCycle(180, testInstructions);
console.log('testSignal180', testSignal180);
var testSignal220 = findSignalStrengthAtCycle(220, testInstructions);
console.log('testSignal220', testSignal220);
console.log("\n----------------\n");
var signal20 = findSignalStrengthAtCycle(20, instructions);
console.log('signal20', signal20);
var signal60 = findSignalStrengthAtCycle(60, instructions);
console.log("signal60", signal60);
var signal100 = findSignalStrengthAtCycle(100, instructions);
console.log('signal100', signal100);
var signal140 = findSignalStrengthAtCycle(140, instructions);
console.log('signal140', signal140);
var signal180 = findSignalStrengthAtCycle(180, instructions);
console.log('signal180', signal180);
var signal220 = findSignalStrengthAtCycle(220, instructions);
console.log('signal220', signal220);
console.log('\n-------------\n');
var sumOfSignals = signal20 + signal60 + signal100 + signal140 + signal180 + signal220;
console.log('Sum of signals: ', sumOfSignals);
//# sourceMappingURL=index.js.map