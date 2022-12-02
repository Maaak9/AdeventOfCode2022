"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var puzzleData_1 = __importDefault(require("../puzzleData"));
var elfsWithMostCalories = puzzleData_1["default"].split("\n\n")
    .map(function (elf) { return elf.split("\n").reduce(function (acc, value) { return acc += parseInt(value); }, 0); })
    .sort(function (a, b) { return b - a; })
    .slice(0, 3);
var sumOfCalories = elfsWithMostCalories.reduce(function (acc, value) { return acc += value; }, 0);
console.log('sumOfCalories', sumOfCalories);
//# sourceMappingURL=index.js.map