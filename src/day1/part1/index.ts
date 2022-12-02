import puzzleData from "../puzzleData";

const sortedCaloriesByElfs = puzzleData.split("\n\n")
  .map((elf) => elf.split("\n").reduce((acc, value) => acc += parseInt(value), 0))
  .sort((a,b) => b - a);

console.log('Elf with most calories: ', sortedCaloriesByElfs[0]);
