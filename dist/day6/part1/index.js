"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puzzleData_1 = __importDefault(require("../puzzleData"));
const dataStream = puzzleData_1.default.split('');
for (let i = 4; i <= dataStream.length; i++) {
    const sequence = dataStream.slice(i - 4, i);
    const uniqueSequence = [...new Set(sequence)];
    if (uniqueSequence.length === 4) {
        console.log('uniqueSequence', uniqueSequence);
        console.log('First unique sequence is at index: ', i);
        i = dataStream.length;
    }
}
//# sourceMappingURL=index.js.map