function solution(phone_number) {
  var answer = "";

  var a = phone_number.substring(phone_number.length - 4);
  var b = phone_number
    .substring(0, phone_number.length - 4)
    .replace(/[0-9]/g, "*");

  var answer = b + a;

  return answer;
}

//다른사람 풀이
function solution(phone_number) {
  var answer = "";
  var answer = phone_number.replace(/\d(?=\d{4})/g, "*");
  return answer;
}
