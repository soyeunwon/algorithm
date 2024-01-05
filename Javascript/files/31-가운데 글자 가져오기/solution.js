//내풀이

function solution(s) {
  let arr = s.split("");
  console.log(arr);

  for (let i = 0; i <= arr.length; i++) {
    if (arr.length % 2 === 0) {
      return arr[arr.length / 2 - 1] + arr[arr.length / 2];
    } else {
      return arr[Math.floor(arr.length / 2)];
    }
  }
}

solution("abcde"); //"c"
solution("qwer"); //"we"

//다른 풀이
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
