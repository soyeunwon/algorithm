function solution(x) {
  var splitedNum = String(x).split("");

  var sum = 0;
  for (var i = 0; i < splitedNum.length; i++) {
    sum += Number(splitedNum[i]);
  }

  if (x % sum === 0) {
    return true;
  } else {
    return false;
  }
}

//다른 사람 풀이
function Harshad(n) {
  return !(n % (n + "").split("").reduce((a, b) => +b + +a));
}
