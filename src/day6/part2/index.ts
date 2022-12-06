import puzzleData from "../puzzleData";

const dataStream = puzzleData.split('');

for (let i = 4; i <= dataStream.length; i++) {
  const sequence = dataStream.slice(i - 14, i);
  const uniqueSequence = [...new Set(sequence)]

  if (uniqueSequence.length === 14) {
    console.log('uniqueSequence', uniqueSequence);
    console.log('First unique sequence is at index: ', i );
    
    i = dataStream.length;
  }
}


