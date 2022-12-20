import puzzleData from "../puzzleData";
import testData from "../testData";
const instructions = puzzleData.split("\n");
const testInstructions = testData.split("\n");

const findSignalStrengthAtCycle = (cycles: number, instructions: string[]) => {
  let xRegister = 1;
  let cyclesPassed = 0;

  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];
    if (instruction.includes("noop")) {
      cyclesPassed++; 
    }
    if (instruction.includes("addx")) {
      cyclesPassed = cyclesPassed + 2;
      if (cyclesPassed < cycles) {
        xRegister = xRegister + parseInt(instructions[i].split(" ")[1])
      }
    }
  }

  return xRegister * cycles;
}

const testSignal20 = findSignalStrengthAtCycle(20, testInstructions);
console.log('testSignal20', testSignal20);
const testSignal60 = findSignalStrengthAtCycle(60, testInstructions);
console.log("testSignal60", testSignal60);
const testSignal100 = findSignalStrengthAtCycle(100, testInstructions);
console.log('testSignal100', testSignal100);
const testSignal140 = findSignalStrengthAtCycle(140, testInstructions);
console.log('testSignal140', testSignal140);
const testSignal180 = findSignalStrengthAtCycle(180, testInstructions);
console.log('testSignal180', testSignal180);
const testSignal220 = findSignalStrengthAtCycle(220, testInstructions);
console.log('testSignal220', testSignal220);

console.log("\n----------------\n");

const signal20 = findSignalStrengthAtCycle(20, instructions);
console.log('signal20', signal20);
const signal60 = findSignalStrengthAtCycle(60, instructions);
console.log("signal60", signal60);
const signal100 = findSignalStrengthAtCycle(100, instructions);
console.log('signal100', signal100);
const signal140 = findSignalStrengthAtCycle(140, instructions);
console.log('signal140', signal140);
const signal180 = findSignalStrengthAtCycle(180, instructions);
console.log('signal180', signal180);
const signal220 = findSignalStrengthAtCycle(220, instructions);
console.log('signal220', signal220);

console.log('\n-------------\n');

const sumOfSignals = signal20 + signal60 + signal100 + signal140 + signal180 + signal220
console.log('Sum of signals: ', sumOfSignals);




