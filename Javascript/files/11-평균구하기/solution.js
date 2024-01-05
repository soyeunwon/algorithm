function solution(arr) {
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return (answer = sum / arr.length);
}

solution([1, 2, 3, 4]); //2.5

//reduce 메서드를 이용한 풀이
function solution(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}

solution([1, 2, 3, 4]); //2.5
