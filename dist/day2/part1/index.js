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
    .replaceAll("C", scissor)
    .replaceAll("X", rock)
    .replaceAll("Y", paper)
    .replaceAll("Z", scissor);
var decryptedStrategy = decryptedPuzzleData
    .split("\n")
    .map(function (round) { return round.split(" "); });
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