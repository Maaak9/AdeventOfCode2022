"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var puzzleData_1 = __importDefault(require("../puzzleData"));
var convertedData = puzzleData_1["default"].split('\n').map(function (pair) {
    return pair.split(',').map(function (elf) {
        var array = [];
        var _a = elf.split('-'), start = _a[0], end = _a[1];
        for (var i = parseInt(start); i <= parseInt(end); i++) {
            array.push(i);
        }
        return array;
    });
});
var overlapingSections = 0;
convertedData.forEach(function (pair) {
    var elf1 = pair[0];
    var elf2 = pair[1];
    elf1.every(function (sectionId) {
        if (elf2.includes(sectionId)) {
            overlapingSections++;
            return false;
        }
        return true;
    });
});
console.log('Pairs with overlaping sections', overlapingSections);
//# sourceMappingURL=index.js.map