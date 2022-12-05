import puzzleData from "../puzzleData";

const parseCrates = (input: string) => {
  // Remove lines after initial state of crates.
  const data = input.split(" 1")[0];
  const parsedData = Array(9).fill([]);
  
  data.split("\n").forEach((row, index) => {
    const rowData = row.split("");
    for (let i = 1; i <= rowData.length; i += 4) {
      if (rowData[i] !== " ") {
        parsedData[(i - 1) / 4] = parsedData[(i - 1) / 4].concat(rowData[i]);
      }
    }
  })
  return parsedData.map((row) => row.reverse()) as [string[]];
}

const parseInstructions = (input: string) => {
  const instructions = [];
  input.split("\n").forEach((row) => {
    const match = row.match(/((\d+)*(\d+)*(\d+))/g);
    if (match && match.length === 3) {
      instructions.push(match.map((m) => parseInt(m)))
    }
  })

  return instructions as [number[]];
}

const preformInstructions = (initalState: [string[]], instructions: [number[]]) => {
  const state = initalState;

  instructions.forEach((instruction) => {
    const [ amount, from, to ] = instruction;
    const movedCrates = state[from - 1].splice(state[from - 1].length - amount, state[from - 1].length);
    state[to - 1] = state[to - 1].concat(movedCrates);
  })

  return state;
}

const parsedInitialState = parseCrates(puzzleData);
const parsedInstroductions = parseInstructions(puzzleData);
const stateAfterInstructions = preformInstructions(parsedInitialState, parsedInstroductions)

let cratesOnTopLevel = [];
stateAfterInstructions.forEach((row) => {
  cratesOnTopLevel.push(row.pop())
})

console.log('The crates on the top level are: ', cratesOnTopLevel.join(""));
