//풀이 1

function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      return `김서방은 ${i}에 있다`;
    }
  }
}

solution(["Jane", "Kim"]); //"김서방은 1에 있다"

//풀이 2

function solution(seoul) {
  let idx = seoul.indexOf("Kim");
  return `김서방은 ${idx}에 있다`;
}

solution(["Jane", "Kim"]); //"김서방은 1에 있다"
