"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var puzzleData_1 = __importDefault(require("../puzzleData"));
var parseCrates = function (input) {
    // Remove lines after initial state of crates.
    var data = input.split(" 1")[0];
    var parsedData = Array(9).fill([]);
    data.split("\n").forEach(function (row) {
        var rowData = row.split("");
        for (var i = 1; i <= rowData.length; i += 4) {
            if (rowData[i] !== " ") {
                parsedData[(i - 1) / 4] = parsedData[(i - 1) / 4].concat(rowData[i]);
            }
        }
    });
    return parsedData.map(function (row) { return row.reverse(); });
};
var parseInstructions = function (input) {
    var instructions = [];
    input.split("\n").forEach(function (row) {
        var match = row.match(/((\d+)*(\d+)*(\d+))/g);
        if (match && match.length === 3) {
            instructions.push(match.map(function (m) { return parseInt(m); }));
        }
    });
    return instructions;
};
var preformInstructions = function (initalState, instructions) {
    var state = initalState;
    instructions.forEach(function (instruction) {
        var amount = instruction[0], from = instruction[1], to = instruction[2];
        for (var i = 0; i < amount; i++) {
            var movedCrate = state[from - 1].pop();
            state[to - 1] = state[to - 1].concat(movedCrate);
        }
    });
    return state;
};
var parsedInitialState = parseCrates(puzzleData_1["default"]);
var parsedInstroductions = parseInstructions(puzzleData_1["default"]);
var stateAfterInstructions = preformInstructions(parsedInitialState, parsedInstroductions);
var cratesOnTopLevel = [];
stateAfterInstructions.forEach(function (row) {
    cratesOnTopLevel.push(row.pop());
});
console.log('The crates on the top level are: ', cratesOnTopLevel.join(""));
//# sourceMappingURL=index.js.map