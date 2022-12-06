"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puzzleData_1 = __importDefault(require("../puzzleData"));
const convertedData = puzzleData_1.default.split('\n').map((pair) => {
    return pair.split(',').map((elf) => {
        // Added seperator so that 3| wont match with 23|
        let array = [""];
        const [start, end] = elf.split('-');
        for (let i = parseInt(start); i <= parseInt(end); i++) {
            array.push(i);
        }
        // Added seperator so that 3| wont match with 23|
        array.push("");
        return array.join('|');
    });
});
let overlapingSections = 0;
convertedData.forEach((pair) => {
    const elf1 = pair[0];
    const elf2 = pair[1];
    if (elf1.includes(elf2) || elf2.includes(elf1)) {
        overlapingSections++;
    }
});
console.log('Pairs with overlaping sections', overlapingSections);
//# sourceMappingURL=index.js.map