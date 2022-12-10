"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var puzzleData_1 = __importDefault(require("../puzzleData"));
var treesArray = puzzleData_1["default"].split("\n")
    .map(function (row) { return row.split("").map(function (length) { return parseInt(length); }); });
var outerEdge = (treesArray.length * 2) + ((treesArray[0].length - 2) * 2);
var visibleTrees = outerEdge;
var checkVisibility = function (array) {
    var highestTree = 0;
    for (var i = 0; i < array.length - 1; i++) {
        if (array[i] >= highestTree) {
            highestTree = array[i];
        }
    }
    if (highestTree < array[array.length - 1]) {
        return true;
    }
    return false;
};
// Skip first and last since thats the outer edge.
for (var y = 1; y < treesArray.length - 1; y++) {
    var _loop_1 = function (x) {
        var treesInX = treesArray[y];
        var treesInY = treesArray.map(function (_, yCord) { return treesArray[yCord][x]; });
        var fromLeft = treesInX.slice(0, x + 1);
        var fromRight = treesInX.slice(x, treesInX.length).reverse();
        var fromTop = treesInY.slice(0, y + 1);
        var fromBottom = treesInY.slice(y, treesInY.length).reverse();
        if (checkVisibility(fromLeft) ||
            checkVisibility(fromRight) ||
            checkVisibility(fromTop) ||
            checkVisibility(fromBottom)) {
            visibleTrees++;
        }
    };
    for (var x = 1; x < treesArray[0].length - 1; x++) {
        _loop_1(x);
    }
}
console.log('visibleTrees', visibleTrees);
//# sourceMappingURL=index.js.map