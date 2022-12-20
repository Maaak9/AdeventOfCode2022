import puzzleData from "../puzzleData";
import testData from "../testData";
const instructions = puzzleData.split("\n");
const testInstructions = testData.split("\n");

let display = [];

const getDisply = (cycles: number, instructions: string[]) => {
  let xRegister = 1;
  let cyclesPassed = 0;

  const print = () => {
    if (cyclesPassed % 40 >= (xRegister -1 % 40) && cyclesPassed % 40 <= ((xRegister + 1) % 40)) {
      display.push("#")
    } else {
      display.push(".");
    }
    
  };

  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];
    if (instruction.includes("noop")) {
      print()
      cyclesPassed++;
    }
    if (instruction.includes("addx")) {
      for (let y = 0; y < 2; y++) {
        print()
        cyclesPassed++;
      }
      if (cyclesPassed < cycles) {
        xRegister = xRegister + parseInt(instructions[i].split(" ")[1])
      }
    }

    if (cyclesPassed > cycles) return 
  }

  // return xRegister * cycles;
}

// getDisply(240, testInstructions)
// const testRow1 = display.slice(0,40);
// const testRow2 = display.slice(40, 80);
// const testRow3 = display.slice(80, 120);
// const testRow4 = display.slice(120, 160);
// const testRow5 = display.slice(160, 200);
// const testRow6 = display.slice(200, 240);

// const convertedTestDisplay = [ testRow1, testRow2, testRow3, testRow4, testRow5, testRow6 ];

// convertedTestDisplay.forEach((row) => {
//   console.log(row.join(""));
// })

// console.log('---------');


getDisply(240, instructions)
const row1 = display.slice(0,40);
const row2 = display.slice(40, 80);
const row3 = display.slice(80, 120);
const row4 = display.slice(120, 160);
const row5 = display.slice(160, 200);
const row6 = display.slice(200, 240);

const convertedDisplay = [ row1, row2, row3, row4, row5, row6 ];

convertedDisplay.forEach((row) => {
  console.log(row.join(""));
})


