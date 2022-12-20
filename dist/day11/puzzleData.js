"use strict";
exports.__esModule = true;
var puzzleData = "Monkey 0:\nStarting items: 83, 88, 96, 79, 86, 88, 70\nOperation: new = old * 5\nTest: divisible by 11\n  If true: throw to monkey 2\n  If false: throw to monkey 3\n\nMonkey 1:\nStarting items: 59, 63, 98, 85, 68, 72\nOperation: new = old * 11\nTest: divisible by 5\n  If true: throw to monkey 4\n  If false: throw to monkey 0\n\nMonkey 2:\nStarting items: 90, 79, 97, 52, 90, 94, 71, 70\nOperation: new = old + 2\nTest: divisible by 19\n  If true: throw to monkey 5\n  If false: throw to monkey 6\n\nMonkey 3:\nStarting items: 97, 55, 62\nOperation: new = old + 5\nTest: divisible by 13\n  If true: throw to monkey 2\n  If false: throw to monkey 6\n\nMonkey 4:\nStarting items: 74, 54, 94, 76\nOperation: new = old * old\nTest: divisible by 7\n  If true: throw to monkey 0\n  If false: throw to monkey 3\n\nMonkey 5:\nStarting items: 58\nOperation: new = old + 4\nTest: divisible by 17\n  If true: throw to monkey 7\n  If false: throw to monkey 1\n\nMonkey 6:\nStarting items: 66, 63\nOperation: new = old + 6\nTest: divisible by 2\n  If true: throw to monkey 7\n  If false: throw to monkey 5\n\nMonkey 7:\nStarting items: 56, 56, 90, 96, 68\nOperation: new = old + 7\nTest: divisible by 3\n  If true: throw to monkey 4\n  If false: throw to monkey 1";
exports["default"] = puzzleData;
// const testData = `Monkey 0:
// Starting items: 79, 98
// Operation: new = old * 19
// Test: divisible by 23
//   If true: throw to monkey 2
//   If false: throw to monkey 3
// Monkey 1:
// Starting items: 54, 65, 75, 74
// Operation: new = old + 6
// Test: divisible by 19
//   If true: throw to monkey 2
//   If false: throw to monkey 0
// Monkey 2:
// Starting items: 79, 60, 97
// Operation: new = old * old
// Test: divisible by 13
//   If true: throw to monkey 1
//   If false: throw to monkey 3
// Monkey 3:
// Starting items: 74
// Operation: new = old + 3
// Test: divisible by 17
//   If true: throw to monkey 0
//   If false: throw to monkey 1`;
// export default testData;
//# sourceMappingURL=puzzleData.js.map