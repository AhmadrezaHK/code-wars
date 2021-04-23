function iqTest(numbers) {
  const evenList = [];
  const oddList = [];
  for (const [index, num] of numbers.split(" ").entries()) {
    if (num % 2 === 0) {
      evenList.push(index);
    } else {
      oddList.push(index);
    }
    if (evenList.length && oddList.length && oddList.length % 2 === 0) {
      return evenList.pop() + 1;
    }
    if (oddList.length && evenList.length && evenList.length % 2 === 0) {
      return oddList.pop() + 1;
    }
  }
}
