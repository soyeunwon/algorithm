process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" "); //입력받은 숫자를 배열로 변경
  const a = Number(n[0]),
    b = Number(n[1]);

  const row = "*".repeat(a); //한줄을 변수로 만들고
  for (let i = 0; i < b; i++) {
    console.log(row); //b 만큼 row를 반복
  }
});
