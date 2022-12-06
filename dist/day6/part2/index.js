"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var puzzleData_1 = __importDefault(require("../puzzleData"));
var dataStream = puzzleData_1["default"].split('');
for (var i = 4; i <= dataStream.length; i++) {
    var sequence = dataStream.slice(i - 14, i);
    var uniqueSequence = sequence.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
    });
    if (uniqueSequence.length === 14) {
        console.log('uniqueSequence', uniqueSequence);
        console.log('First unique sequence is at index: ', i);
        i = dataStream.length;
    }
}
//# sourceMappingURL=index.js.map