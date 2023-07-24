// It achieves some efficiency by halving the number of items under consideration
// each time it probes the values: in the first pass it determines whether the required
// value is in the top or the bottom half of the list of values.

// In the second pass in considers only this half, again dividing it in to two.
// It stops when it finds the value it is looking for, or when it runs out of array to search.
// Binary searches are a favorite of CS lecturers.

// This Kata is straightforward.
// Implement a binary search routine (using the specification below)
// in the language and technique of your choice.

function getIndexFromArray(array, numberToFind, indexAccumulator = 0) {
  for (let index = 0; index < array.length; index++) {
    const number = array[index];

    if (number == numberToFind) {
      return index + indexAccumulator;
    }
  }

  return -1;
}

export default function chop(numberToFind, array) {
  const arraySize = array.length;

  // handle empty array
  if (arraySize === 0) {
    return -1;
  }

  // do simple comparisons before we even attempt array logic for performance
  // handle the first index
  if (array[0] === numberToFind) {
    return 0;
  }

  // handle the last index
  if ((array[array.length - 1]) === numberToFind) {
    return array.length - 1;
  }

  const halfArrayLength = (Math.ceil(array.length / 2) - 1);
  const lastNumFromHalf = array[halfArrayLength];

  if (lastNumFromHalf === numberToFind) {
    return halfArrayLength;
  }
  
  if (lastNumFromHalf > numberToFind) {
    return getIndexFromArray(array.slice(0, halfArrayLength), numberToFind)
  }

  return getIndexFromArray(
    array.slice(halfArrayLength),
    numberToFind,
    halfArrayLength // 3rd parameter is the index accumulator
  );
}
