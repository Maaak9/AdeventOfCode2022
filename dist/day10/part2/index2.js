"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    var processes = [];
    for (var i = 0; i < instructions.length; i++) {
        console.log('xRegister', xRegister);
        console.log('cyclesPassed', cyclesPassed);
        processes = processes.map(function (p) {
            if (p.cyclesLeft - 1 === 0) {
                xRegister = xRegister + p.value;
            }
            return __assign({}, p, { cyclesLeft: p.cyclesLeft - 1 });
        }).filter(function (p) { return p.cyclesLeft !== 0; });
        var instruction = instructions[i];
        if (instruction.includes("addx")) {
            processes.push({
                command: "addx",
                cyclesLeft: 2,
                value: parseInt(instructions[i].split(" ")[1])
            });
        }
        cyclesPassed += 1;
        if (cyclesPassed > cycles) {
            i = 100000000000;
        }
    }
    return xRegister;
};
var testSignal20 = findSignalStrengthAtCycle(20, testInstructions);
console.log('testSignal20', testSignal20);
// const testSignal60 = findSignalStrengthAtCycle(60, testInstructions);
// console.log("testSignal60", testSignal60);
// const testSignal100 = findSignalStrengthAtCycle(100, testInstructions);
// console.log('testSignal100', testSignal100);
// const testSignal140 = findSignalStrengthAtCycle(140, testInstructions);
// console.log('testSignal140', testSignal140);
// const testSignal180 = findSignalStrengthAtCycle(180, testInstructions);
// console.log('testSignal180', testSignal180);
// const testSignal220 = findSignalStrengthAtCycle(220, testInstructions);
// console.log('testSignal220', testSignal220);
// console.log("\n----------------\n");
// const signal20 = findSignalStrengthAtCycle(20, instructions);
// console.log('signal20', signal20);
// const signal60 = findSignalStrengthAtCycle(60, instructions);
// console.log("signal60", signal60);
// const signal100 = findSignalStrengthAtCycle(100, instructions);
// console.log('signal100', signal100);
// const signal140 = findSignalStrengthAtCycle(140, instructions);
// console.log('signal140', signal140);
// const signal180 = findSignalStrengthAtCycle(180, instructions);
// console.log('signal180', signal180);
// const signal220 = findSignalStrengthAtCycle(220, instructions);
// console.log('signal220', signal220);
// console.log('\n-------------\n');
// const sumOfSignals = signal20 + signal60 + signal100 + signal140 + signal180 + signal220
// console.log('Sum of signals: ', sumOfSignals);
//# sourceMappingURL=index2.js.map