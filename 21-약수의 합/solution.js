//내 풀이

function solution(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr.reduce((a, b) => a + b);
}

//다른 사람 풀이
function solution(n) {
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}
