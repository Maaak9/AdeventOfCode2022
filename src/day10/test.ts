import puzzleData from "../puzzleData";
import testData from "../testData";
const instructions = puzzleData.split("\n");
const testInstructions = testData.split("\n");

type Process = {
  command: "addx",
  cyclesLeft: number,
  value: number,
}

const findSignalStrengthAtCycle = (cycle: number, instructions: string[]) => {
  let xRegister = 1;

  let processes: Process[] = [];
  for (let i = 0; i < cycle; i++) {
    console.log('processes', processes);
    
    processes = processes.map((p) => {
      if (p.cyclesLeft - 1 === 0) {
        xRegister = xRegister + p.value;
      }

      return { ...p, cyclesLeft: p.cyclesLeft - 1 };
    }).filter((p) => p.cyclesLeft !== 0);

    console.log('processes', processes);
    console.log('xRegister', xRegister);
    
    


    const instruction = instructions[i];
    console.log('instruction', instruction);

    if (instruction.includes("addx")) {
      console.log('1111');
      
      processes.push({
        command: "addx",
        cyclesLeft: 3,
        value: parseInt(instructions[i].split(" ")[1]),
      })
    }
    
  }
  return xRegister;
}

const test = findSignalStrengthAtCycle(20, testInstructions);
console.log('testt', test);

