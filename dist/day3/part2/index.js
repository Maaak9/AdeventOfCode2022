"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var puzzleData_1 = __importDefault(require("../puzzleData"));
var puzzleDataSplitGroups = puzzleData_1["default"].match(/(?:.+\n?){3}/g);
var groups = puzzleDataSplitGroups.map(function (group) { return group
    .split('\n')
    .slice(0, 3)
    .map(function (member) { return member; }); });
var matchingItems = groups.map(function (group) {
    var m1 = group[0], m2 = group[1], m3 = group[2];
    var duplicatedItems = [];
    m1.split('').forEach(function (item) {
        if (m2.includes(item) && !duplicatedItems.includes(item)) {
            duplicatedItems.push(item);
        }
    });
    duplicatedItems = duplicatedItems.filter(function (item) { return m3.includes(item); });
    return duplicatedItems;
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