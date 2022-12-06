"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puzzleData_1 = __importDefault(require("../puzzleData"));
const parseCrates = (input) => {
    // Remove lines after initial state of crates.
    const data = input.split(" 1")[0];
    const parsedData = Array(9).fill([]);
    data.split("\n").forEach((row) => {
        const rowData = row.split("");
        for (let i = 1; i <= rowData.length; i += 4) {
            if (rowData[i] !== " ") {
                parsedData[(i - 1) / 4] = parsedData[(i - 1) / 4].concat(rowData[i]);
            }
        }
    });
    return parsedData.map((row) => row.reverse());
};
const parseInstructions = (input) => {
    const instructions = [];
    input.split("\n").forEach((row) => {
        const match = row.match(/((\d+)*(\d+)*(\d+))/g);
        if (match && match.length === 3) {
            instructions.push(match.map((m) => parseInt(m)));
        }
    });
    return instructions;
};
const preformInstructions = (initalState, instructions) => {
    const state = initalState;
    instructions.forEach((instruction) => {
        const [amount, from, to] = instruction;
        for (let i = 0; i < amount; i++) {
            const movedCrate = state[from - 1].pop();
            state[to - 1] = state[to - 1].concat(movedCrate);
        }
    });
    return state;
};
const parsedInitialState = parseCrates(puzzleData_1.default);
const parsedInstroductions = parseInstructions(puzzleData_1.default);
const stateAfterInstructions = preformInstructions(parsedInitialState, parsedInstroductions);
let cratesOnTopLevel = [];
stateAfterInstructions.forEach((row) => {
    cratesOnTopLevel.push(row.pop());
});
console.log('The crates on the top level are: ', cratesOnTopLevel.join(""));
//# sourceMappingURL=index.js.map