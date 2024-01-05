//내풀이

function solution(a, b) {
  let sum = 0;
  if (a <= b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  }
  return sum;
}

solution(3, 5); //12
solution(3, 3); //3

//다른 풀이

function solution(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

solution(3, 5); //12
solution(3, 3); //3
