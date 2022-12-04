"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var puzzleData_1 = __importDefault(require("../puzzleData"));
var convertedData = puzzleData_1["default"].split('\n').map(function (pair) {
    return pair.split(',').map(function (elf) {
        // Added seperator so that 3| wont match with 23|
        var array = [""];
        var _a = elf.split('-'), start = _a[0], end = _a[1];
        for (var i = parseInt(start); i <= parseInt(end); i++) {
            array.push(i);
        }
        // Added seperator so that 3| wont match with 23|
        array.push("");
        return array.join('|');
    });
});
var overlapingSections = 0;
convertedData.forEach(function (pair) {
    var elf1 = pair[0];
    var elf2 = pair[1];
    if (elf1.includes(elf2) || elf2.includes(elf1)) {
        overlapingSections++;
    }
});
console.log('Pairs with overlaping sections', overlapingSections);
//# sourceMappingURL=index.js.map