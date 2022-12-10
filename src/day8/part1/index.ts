import puzzleData from "../puzzleData";

const treesArray = puzzleData.split("\n")
  .map((row) => row.split("").map((length) => parseInt(length)));
const outerEdge = (treesArray.length * 2) + ((treesArray[0].length - 2) * 2);

let visibleTrees = outerEdge;

const checkVisibility = (array: number[]) => {
  let highestTree = 0;
  for (let i = 0; i < array.length -1; i++) {
    if (array[i] >= highestTree) {
      highestTree = array[i];
    }
  }

  if (highestTree < array[array.length - 1]) {
    return true;
  }
  return false;
  
}

// Skip first and last since thats the outer edge.
for (let y = 1; y < treesArray.length - 1; y++) {
  for (let x = 1; x < treesArray[0].length - 1; x++) {
    const treesInX = treesArray[y];
    const treesInY = treesArray.map((_, yCord) => { return treesArray[yCord][x] })
    
    const fromLeft = treesInX.slice(0, x + 1);
    const fromRight = treesInX.slice(x, treesInX.length).reverse();
    const fromTop = treesInY.slice(0, y + 1);
    const fromBottom = treesInY.slice(y, treesInY.length).reverse();

    if (checkVisibility(fromLeft) ||
        checkVisibility(fromRight) ||
        checkVisibility(fromTop) ||
        checkVisibility(fromBottom)) {
      visibleTrees++;
    }
  }
}


console.log('visibleTrees', visibleTrees);
