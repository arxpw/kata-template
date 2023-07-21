// It achieves some efficiency by halving the number of items under consideration
// each time it probes the values: in the first pass it determines whether the required
// value is in the top or the bottom half of the list of values.

// In the second pass in considers only this half, again dividing it in to two.
// It stops when it finds the value it is looking for, or when it runs out of array to search.
// Binary searches are a favorite of CS lecturers.

// This Kata is straightforward.
// Implement a binary search routine (using the specification below)
// in the language and technique of your choice.

export default function chop(numberToFind, array) {
  const arraySize = array.length;

  if (!arraySize) {
    return -1;
  }

  const half = Math.ceil(array.length / 2);    
  const firstHalf = array.slice(0, half);

  for (let index = 0; index < firstHalf.length; index++) {
    const number = firstHalf[index];

    if (number == numberToFind) {
      return index;
    }
  }

  const secondHalf = array.slice(half)

  for (let index = 0; index < secondHalf.length; index++) {
    const number = secondHalf[index];

    if (number == numberToFind) {
      return index + firstHalf.length;
    }
  }

  return -1;
}
