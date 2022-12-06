"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puzzleData_1 = __importDefault(require("../puzzleData"));
const sortedCaloriesByElfs = puzzleData_1.default.split("\n\n")
    .map((elf) => elf.split("\n").reduce((acc, value) => acc += parseInt(value), 0))
    .sort((a, b) => b - a);
console.log('Elf with most calories: ', sortedCaloriesByElfs[0]);
//# sourceMappingURL=index.js.map