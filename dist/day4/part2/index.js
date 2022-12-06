"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puzzleData_1 = __importDefault(require("../puzzleData"));
const convertedData = puzzleData_1.default.split('\n').map((pair) => {
    return pair.split(',').map((elf) => {
        let array = [];
        const [start, end] = elf.split('-');
        for (let i = parseInt(start); i <= parseInt(end); i++) {
            array.push(i);
        }
        return array;
    });
});
let overlapingSections = 0;
convertedData.forEach((pair) => {
    const elf1 = pair[0];
    const elf2 = pair[1];
    elf1.every((sectionId) => {
        if (elf2.includes(sectionId)) {
            overlapingSections++;
            return false;
        }
        return true;
    });
});
console.log('Pairs with overlaping sections', overlapingSections);
//# sourceMappingURL=index.js.map