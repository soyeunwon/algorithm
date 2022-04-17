function solution(n) {
  const num = Math.sqrt(n);
  if (num % 1 === 0) {
    return (num + 1) * (num + 1);
  } else {
    return -1;
  }
}

solution(121); //144
solution(3); //-1
