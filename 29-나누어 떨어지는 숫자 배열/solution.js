function solution(arr, divisor) {
  let answer = [];

  arr.map((num) => {
    if (num % divisor === 0) {
      answer.push(num);
    }
  });
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

solution([5, 9, 7, 10], 5); //[5,10]
solution([2, 36, 1, 3], 1); //[1, 2, 3, 36]
solution([3, 2, 6], 10); //[-1]
