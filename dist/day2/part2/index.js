"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var puzzleData_1 = __importDefault(require("../puzzleData"));
var rock = "rock";
var paper = "paper";
var scissor = "scissor";
var decryptedPuzzleData = puzzleData_1["default"]
    .replaceAll("A", rock)
    .replaceAll("B", paper)
    .replaceAll("C", scissor);
var decryptedStrategy = decryptedPuzzleData
    .split("\n")
    .map(function (round) {
    var _a = round.split(" "), a = _a[0], b = _a[1];
    // lose
    if (b === "X") {
        if (a === rock)
            return [a, scissor];
        if (a === paper)
            return [a, rock];
        if (a === scissor)
            return [a, paper];
    }
    // draw
    if (b === "Y")
        return [a, a];
    // win
    if (b === "Z") {
        if (a === rock)
            return [a, paper];
        if (a === paper)
            return [a, scissor];
        if (a === scissor)
            return [a, rock];
    }
});
var getShapeValue = function (a) {
    if (a === rock)
        return 1;
    if (a === paper)
        return 2;
    return 3;
};
var calcScore = function (a, b) {
    // draw
    if (a === b) {
        return 3 + getShapeValue(b);
    }
    // win
    else if ((a === rock && b === paper) ||
        (a === paper && b === scissor) ||
        (a === scissor && b === rock)) {
        return 6 + getShapeValue(b);
    }
    // lost
    else {
        return 0 + getShapeValue(b);
    }
};
var calculatedOutcomes = decryptedStrategy.map(function (round) { return calcScore(round[0], round[1]); });
var sumOfOutcomes = calculatedOutcomes.reduce(function (acc, x) { return acc += x; }, 0);
console.log('sumOfOutcomes', sumOfOutcomes);
//# sourceMappingURL=index.js.map