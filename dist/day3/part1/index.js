"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puzzleData_1 = __importDefault(require("../puzzleData"));
const backpacks = puzzleData_1.default.split('\n')
    .map((row) => [
    row.slice(0, row.length / 2),
    row.slice(row.length / 2, row.length)
]);
const matchingItems = backpacks.map((bag) => {
    const [bagPart1, bagPart2] = bag;
    const sameItems = [];
    bagPart1.split('').forEach((item) => {
        if (bagPart2.includes(item) && !sameItems.includes(item)) {
            sameItems.push(item);
        }
    });
    return sameItems;
});
const isUpperCase = (a) => {
    if (a === a.toLocaleUpperCase())
        return true;
    return false;
};
let sumOfItems = 0;
matchingItems.forEach((item) => {
    if (isUpperCase(item[0])) {
        sumOfItems += item[0].charCodeAt() - 38;
    }
    else {
        sumOfItems += item[0].charCodeAt() - 96;
    }
});
console.log('sumOfItems', sumOfItems);
//# sourceMappingURL=index.js.map