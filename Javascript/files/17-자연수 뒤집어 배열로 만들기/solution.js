function solution(n) {
  return n
    .toString()
    .split("")
    .map((el) => (el = parseInt(el)))
    .reverse();
}

solution(12345); //[5,4,3,2,1]
