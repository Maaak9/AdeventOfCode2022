"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var puzzleData_1 = __importDefault(require("../puzzleData"));
var treesArray = puzzleData_1["default"].split("\n")
    .map(function (row) { return row.split("").map(function (length) { return parseInt(length); }); });
var getNumberOfTreesVisible = function (array) {
    var treeHouseHeight = array[0];
    var highestTreeInVision = 0;
    var visibleTrees = 0;
    for (var i = 1; i < array.length; i++) {
        if (array[i] <= treeHouseHeight || array[i] >= highestTreeInVision) {
            visibleTrees = i;
            highestTreeInVision = array[i];
        }
        if (array[i] >= treeHouseHeight) {
            i = array.length;
        }
    }
    return visibleTrees;
};
var bestScenicScore = 0;
for (var y = 0; y < treesArray.length; y++) {
    var _loop_1 = function (x) {
        var currentTree = treesArray[y][x];
        // console.log(`${currentTree} | x: ${x} y: ${y}`);
        var treesInX = treesArray[y];
        var treesInY = treesArray.map(function (_, yCord) { return treesArray[yCord][x]; });
        var left = treesInX.slice(0, x + 1).reverse();
        var right = treesInX.slice(x, treesInX.length);
        var top_1 = treesInY.slice(0, y + 1).reverse();
        var bottom = treesInY.slice(y, treesInY.length);
        var visibleTreesLeft = getNumberOfTreesVisible(left);
        var visibleTreesRight = getNumberOfTreesVisible(right);
        var visibleTreesTop = getNumberOfTreesVisible(top_1);
        var visibleTreesBottom = getNumberOfTreesVisible(bottom);
        var scenicScore = visibleTreesLeft * visibleTreesRight * visibleTreesTop * visibleTreesBottom;
        if (scenicScore > bestScenicScore) {
            bestScenicScore = scenicScore;
        }
    };
    for (var x = 0; x < treesArray[0].length; x++) {
        _loop_1(x);
    }
}
console.log('bestScenicScore', bestScenicScore);
//# sourceMappingURL=index.js.map