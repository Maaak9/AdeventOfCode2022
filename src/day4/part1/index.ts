import puzzleData from "../puzzleData";

const convertedData = puzzleData.split('\n').map((pair) => {
  return pair.split(',').map((elf) => {
    // Added seperator so that 3| wont match with 23|
    let array: (string | number)[] = [""];
    const [start, end] = elf.split('-');

    for (let i = parseInt(start); i <= parseInt(end); i++) {
      array.push(i);
    }
    // Added seperator so that 3| wont match with 23|
    array.push("")
    
    return array.join('|');
  });
})

let overlapingSections = 0;
convertedData.forEach((pair) => {
  const elf1 = pair[0];
  const elf2 = pair[1];

  if (elf1.includes(elf2) || elf2.includes(elf1)) {
    overlapingSections++;
  }
})

console.log('Pairs with overlaping sections', overlapingSections);
