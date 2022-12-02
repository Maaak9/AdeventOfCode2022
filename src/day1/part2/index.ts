import puzzleData from "../puzzleData";


const elfsWithMostCalories = puzzleData.split("\n\n")
  .map((elf) => elf.split("\n").reduce((acc, value) => acc += parseInt(value), 0))
  .sort((a,b) => b - a)
  .slice(0,3);

const sumOfCalories = elfsWithMostCalories.reduce((acc,value) => acc += value, 0);

console.log('sumOfCalories', sumOfCalories)



