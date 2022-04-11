//유클리드 호제법!
//2개의 자연수(또는 정식) a,b에 대해서 a를 b로 나눈 나머지를 r이라 하면 (단, a>b)
//a와 b의 최대공약수는 b와 r의 최대공약수와 같다.
//이 성질에 따라, b를 r로 나눈 나머지 r'을 구하고,
//다시 r을 r'로 나눈 나머지를 구하는 과정을 반복하여 나머지가 0이 되었을 때 나누는 수가
//a와 b의 최대공약수이다.

function solution(n, m) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b); //최소공배수는 두 수를 곱한 후에 최대 공약수로 나눔.
  return [gcd(n, m), lcm(n, m)];
}

solution(2, 5); // [1,10]
solution(3, 12); // [3, 12]
