export default function chop(numberToFind, array, indexAccumulator = 0) {
  let indexToReturn = -1;

  if (!array.length) {
    return indexToReturn;
  }

  const middleIndex = Math.floor(array.length / 2);
  const middleNumber = array[middleIndex];

  if (middleNumber === numberToFind) {
    return indexAccumulator + middleIndex;
  }

  if (middleNumber > numberToFind) {
    indexToReturn = chop(
      numberToFind,
      array.slice(0, middleIndex),
      indexAccumulator
    );
  } else {
    const arrayToChop = array.slice(middleIndex + 1, array.length);
    const arrayLengthDifference = (array.length - arrayToChop.length);

    indexToReturn = chop(
      numberToFind,
      arrayToChop,
      indexAccumulator + arrayLengthDifference
    );
  }

  return indexToReturn;
}
