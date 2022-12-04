"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var puzzleData_1 = __importDefault(require("../puzzleData"));
var backpacks = puzzleData_1["default"].split('\n')
    .map(function (row) { return [
    row.slice(0, row.length / 2),
    row.slice(row.length / 2, row.length)
]; });
var matchingItems = backpacks.map(function (bag) {
    var bagPart1 = bag[0], bagPart2 = bag[1];
    var sameItems = [];
    bagPart1.split('').forEach(function (item) {
        if (bagPart2.includes(item) && !sameItems.includes(item)) {
            sameItems.push(item);
        }
    });
    return sameItems;
});
var isUpperCase = function (a) {
    if (a === a.toLocaleUpperCase())
        return true;
    return false;
};
var sumOfItems = 0;
matchingItems.forEach(function (item) {
    if (isUpperCase(item[0])) {
        sumOfItems += item[0].charCodeAt() - 38;
    }
    else {
        sumOfItems += item[0].charCodeAt() - 96;
    }
});
console.log('sumOfItems', sumOfItems);
//# sourceMappingURL=index.js.map