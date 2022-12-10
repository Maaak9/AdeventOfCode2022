import puzzleData from "../puzzleData";

const treesArray = puzzleData.split("\n")
  .map((row) => row.split("").map((length) => parseInt(length)));

const getNumberOfTreesVisible = (array: number[]) => {
  const treeHouseHeight = array[0]
  let highestTreeInVision = 0;
  let visibleTrees = 0;
  
  for (let i = 1; i < array.length; i++) {
    if (array[i] <= treeHouseHeight || array[i] >= highestTreeInVision) {
      visibleTrees = i;
      highestTreeInVision = array[i];
    }
    if (array[i] >= treeHouseHeight) {
      i = array.length;
    }
  }
  return visibleTrees;
}

let bestScenicScore = 0;

for (let y = 0; y < treesArray.length; y++) {
  for (let x = 0; x < treesArray[0].length; x++) {
    const currentTree = treesArray[y][x];
    // console.log(`${currentTree} | x: ${x} y: ${y}`);
    
    const treesInX = treesArray[y];
    const treesInY = treesArray.map((_, yCord) => { return treesArray[yCord][x] })
    
    const left = treesInX.slice(0, x + 1).reverse();
    const right = treesInX.slice(x, treesInX.length);
    const top = treesInY.slice(0, y + 1).reverse();
    const bottom = treesInY.slice(y, treesInY.length);

    const visibleTreesLeft = getNumberOfTreesVisible(left);
    const visibleTreesRight = getNumberOfTreesVisible(right);
    const visibleTreesTop = getNumberOfTreesVisible(top);
    const visibleTreesBottom = getNumberOfTreesVisible(bottom);
    
    
    const scenicScore = visibleTreesLeft * visibleTreesRight * visibleTreesTop * visibleTreesBottom;
    if (scenicScore > bestScenicScore) {
      bestScenicScore = scenicScore
    }

  }
}

console.log('bestScenicScore', bestScenicScore);
