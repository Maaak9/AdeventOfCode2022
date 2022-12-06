"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puzzleData_1 = __importDefault(require("../puzzleData"));
const puzzleDataSplitGroups = puzzleData_1.default.match(/(?:.+\n?){3}/g);
const groups = puzzleDataSplitGroups.map((group) => group
    .split('\n')
    .slice(0, 3)
    .map((member) => member));
const matchingItems = groups.map((group) => {
    const [m1, m2, m3] = group;
    let duplicatedItems = [];
    m1.split('').forEach((item) => {
        if (m2.includes(item) && !duplicatedItems.includes(item)) {
            duplicatedItems.push(item);
        }
    });
    duplicatedItems = duplicatedItems.filter((item) => m3.includes(item));
    return duplicatedItems;
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