function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((el, key) => (key % 2 === 0 ? el.toUpperCase() : el.toLowerCase()))
        .join("")
    )
    .join(" ");
}

solution("try hello world"); //"TrY HeLlO WoRlD"
