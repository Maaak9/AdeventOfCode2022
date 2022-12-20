import testData from "../puzzleData";

const monkeys = testData.split("\n\n").map((monkeyText) => {
  const test = monkeyText.split("\n")

  return {
    items: test[1].split("Starting items: ")[1].split(",").map((nr) => parseInt(nr)),
    operation: test[2].split("Operation: new = ")[1],
    test: parseInt(test[3].split("Test: divisible by ")[1]),
    testTrue: parseInt(test[4].split("  If true: throw to monkey ")[1]),
    testFalse: parseInt(test[5].split("  If false: throw to monkey ")[1]),
    inspectedItems: 0,
  }
});

for (let i = 0; i < 20; i++) {
  monkeys.forEach((monkey, index) => {
    monkey.items = monkey.items.filter((item) => {
      monkey.inspectedItems += 1;
      let worryLevel = eval(monkey.operation.replaceAll("old", item.toString()))
      worryLevel = Math.floor(worryLevel / 3);
      if (Number.isInteger(worryLevel / monkey.test)) {
        monkeys[monkey.testTrue].items = [...monkeys[monkey.testTrue].items, worryLevel];
      } else {
        monkeys[monkey.testFalse].items = [...monkeys[monkey.testFalse].items, worryLevel];
      }
      return false;
    })
  })
}

const sortedMonkeys = monkeys.sort((a,b) => b.inspectedItems - a.inspectedItems);
const monkeyBusiness = sortedMonkeys[0].inspectedItems * sortedMonkeys[1].inspectedItems;
console.log('Level of monkey business :', monkeyBusiness);

