//내 풀이

function solution(n) {
  return n % 2 === 0 ? "수박".repeat(n / 2) : "수박".repeat(n / 2) + "수";
}

solution(3); //수박수
solution(4); //수박수빅

//다른 풀이
function solution(n) {
  return "수박".repeat(n).slice(0, n);
}

solution(3); //수박수
solution(4); //수박수박
