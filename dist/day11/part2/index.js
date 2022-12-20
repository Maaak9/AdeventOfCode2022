"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var puzzleData_1 = __importDefault(require("../puzzleData"));
var monkeys = puzzleData_1["default"].split("\n\n").map(function (monkeyText) {
    var test = monkeyText.split("\n");
    return {
        items: test[1].split("Starting items: ")[1].split(",").map(function (nr) { return parseInt(nr); }),
        operation: test[2].split("Operation: new = ")[1],
        test: parseInt(test[3].split("Test: divisible by ")[1]),
        testTrue: parseInt(test[4].split("  If true: throw to monkey ")[1]),
        testFalse: parseInt(test[5].split("  If false: throw to monkey ")[1]),
        inspectedItems: 0
    };
});
var modulusNr = monkeys.reduce(function (acc, m) { return acc * m.test; }, 1);
for (var i = 0; i < 10000; i++) {
    monkeys.forEach(function (monkey, index) {
        monkey.items = monkey.items.filter(function (item) {
            monkey.inspectedItems += 1;
            var worryLevel = eval(monkey.operation.replaceAll("old", item.toString())) % modulusNr;
            if (Number.isInteger(worryLevel / monkey.test)) {
                monkeys[monkey.testTrue].items = monkeys[monkey.testTrue].items.concat([worryLevel]);
            }
            else {
                monkeys[monkey.testFalse].items = monkeys[monkey.testFalse].items.concat([worryLevel]);
            }
            return false;
        });
    });
}
console.log('monkeys', monkeys);
var sortedMonkeys = monkeys.sort(function (a, b) { return b.inspectedItems - a.inspectedItems; });
var monkeyBusiness = sortedMonkeys[0].inspectedItems * sortedMonkeys[1].inspectedItems;
console.log('Level of monkey business :', monkeyBusiness);
//# sourceMappingURL=index.js.map