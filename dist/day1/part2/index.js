"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puzzleData_1 = __importDefault(require("../puzzleData"));
const elfsWithMostCalories = puzzleData_1.default.split("\n\n")
    .map((elf) => elf.split("\n").reduce((acc, value) => acc += parseInt(value), 0))
    .sort((a, b) => b - a)
    .slice(0, 3);
const sumOfCalories = elfsWithMostCalories.reduce((acc, value) => acc += value, 0);
console.log('sumOfCalories', sumOfCalories);
//# sourceMappingURL=index.js.map