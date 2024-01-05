//data 암호값 -> JEJU 반환

let data = [
  "   + -- + - + -   ",
  "   + --- + - +   ",
  "   + -- + - + -  ",
  "   + - + - + - +   ",
];

function 암호해독() {
  let answer = "";

  for (let s of data) {
    const result = String.fromCharCode(
      parseInt(s.replace(/ /g, "").replace(/\+/g, "1").replace(/-/g, "0"), 2)
    );

    answer += result;
  }

  return answer;
}

console.log(암호해독());
