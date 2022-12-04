import puzzleData from "../puzzleData";

const convertedData = puzzleData.split('\n').map((pair) => {
  return pair.split(',').map((elf) => {
    let array = [];
    const [start, end] = elf.split('-');

    for (let i = parseInt(start); i <= parseInt(end); i++) {
      array.push(i);
    }

    return array;
  });
});


let overlapingSections = 0;
convertedData.forEach((pair) => {
  const elf1 = pair[0];
  const elf2 = pair[1];

  elf1.every((sectionId) => {
    if (elf2.includes(sectionId)) {
      overlapingSections++;
      return false;
    }
    return true
  })
})

console.log('Pairs with overlaping sections', overlapingSections);
