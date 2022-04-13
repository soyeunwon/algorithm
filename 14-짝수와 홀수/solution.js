function solution(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

//다른 풀이
function solution(num) {
  return num % 2 == 0 ? "Even" : "Odd";
}

solution(3); // Odd
solution(4); // Even
solution(0); // Even
