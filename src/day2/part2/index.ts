import puzzleData from "../puzzleData";


const rock = "rock";
const paper = "paper";
const scissor = "scissor";

export type Shape = "rock" | "paper" |  "scissor";

const decryptedPuzzleData = puzzleData
  .replaceAll("A", rock)
  .replaceAll("B", paper)
  .replaceAll("C", scissor);

const decryptedStrategy = decryptedPuzzleData
  .split("\n")
  .map((round) => {
    const [a, b] = round.split(" ");
    // lose
    if (b === "X") {
      if (a === rock) return [a, scissor];
      if (a === paper) return [a, rock];
      if (a === scissor) return [a, paper];
    }
    // draw
    if (b === "Y") return [a, a];
    // win
    if (b === "Z") {
      if (a === rock) return [a, paper];
      if (a === paper) return [a, scissor];
      if (a === scissor) return [a, rock];
    }
  }) as [Shape[]];

const getShapeValue = (a: Shape) => {
  if (a === rock) return 1;
  if (a === paper) return 2;
  return 3;
}

const calcScore = (a: Shape, b: Shape) => {
  // draw
  if (a === b) {
    return 3 + getShapeValue(b);
  }
  // win
  else if ((a === rock && b === paper) || 
           (a === paper && b === scissor) ||
           (a === scissor && b === rock)) {
    return 6 + getShapeValue(b);
  }
  // lost
  else {
    return 0 + getShapeValue(b);
  }
}

const calculatedOutcomes = decryptedStrategy.map((round) => calcScore(round[0], round[1]))

const sumOfOutcomes = calculatedOutcomes.reduce((acc, x) => acc += x, 0);
console.log('sumOfOutcomes', sumOfOutcomes)