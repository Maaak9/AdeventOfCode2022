import puzzleData from "../puzzleData";

const dataStream = puzzleData.split('');

for (let i = 4; i <= dataStream.length; i++) {
  const sequence = dataStream.slice(i - 4, i);
  const uniqueSequence = sequence.filter((item, pos, self) => {
    return self.indexOf(item) == pos;
  })

  if (uniqueSequence.length === 4) {
    console.log('uniqueSequence', uniqueSequence);
    console.log('First unique sequence is at index: ', i );
    
    i = dataStream.length;
  }
}


