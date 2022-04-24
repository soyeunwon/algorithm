function solution(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

solution("pPoooyY"); //true
solution("Pyy"); //false
