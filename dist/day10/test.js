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
var findSignalStrengthAtCycle = function (cycle, instructions) {
    var xRegister = 1;
    var processes = [];
    for (var i = 0; i < cycle; i++) {
        console.log('processes', processes);
        processes = processes.map(function (p) {
            if (p.cyclesLeft - 1 === 0) {
                xRegister = xRegister + p.value;
            }
            return __assign({}, p, { cyclesLeft: p.cyclesLeft - 1 });
        }).filter(function (p) { return p.cyclesLeft !== 0; });
        console.log('processes', processes);
        console.log('xRegister', xRegister);
        var instruction = instructions[i];
        console.log('instruction', instruction);
        if (instruction.includes("addx")) {
            console.log('1111');
            processes.push({
                command: "addx",
                cyclesLeft: 3,
                value: parseInt(instructions[i].split(" ")[1])
            });
        }
    }
    return xRegister;
};
var test = findSignalStrengthAtCycle(20, testInstructions);
console.log('testt', test);
//# sourceMappingURL=test.js.map