/*
LRU(Least Resently Used) 알고리즘: 자리(페이지) 부재가 발생했을 경우 가장 오랫동안 사용되지 않은 자리(페이지)를 제거

문제
1. 다리가 아픈 동물들이 순서대로 들어온다.
2. 동물들의 종류는 다음과 같다.
    - 무척추동물, 척추동물, 어류, 양서류, 파충류, 조류, 포유류
3. 동물들의 '종'이 같을 경우 무릎에 앉을 수 있다. 다 회복된 동물들은 언제든지 빠질 수 있다. 무릎에 앉을 경우 1초로 카운트 한다!
4. 아무도 없거나, 자리가 꽉 차 있을 때 '이 종'이 들어올 경우 가장 오래 앉아있던 동물이 아닌, 가장 최근에 같은 종이 한 번도 들어오지 않은 '종'이 나가게 된다. 이때 자리를 깨끗하게 청소해야 해서 1분이 걸린다.
5. 동물(페이지)들이 아래와 같이 차례대로 들어왔을 때 전체 수행 시간(실행 시간)을 구해야 한다.

- 입력 : 페이지 = ['척추동물', '어류', '척추동물', '무척추동물', '파충류', '척추동물', '어류', '파충류']
- 출력 : 5분 3초
 */

let animals = [
  "척추동물",
  "어류",
  "척추동물",
  "무척추동물",
  "파충류",
  "척추동물",
  "어류",
  "파충류",
];

function solution(animals) {
  let chairs = [];
  let answer = 0;

  for (let animal of animals) {
    if (chairs.length < 3) {
      if (chairs.includes(animal)) {
        chairs.splice(chairs.indexOf(animal), 1);
        chairs.push(animal);
        answer += 1;
      } else {
        chairs.push(animal);
        answer += 60;
      }
    } else {
      if (chairs.includes(animal)) {
        chairs.splice(chairs.indexOf(animal), 1);
        chairs.push(animal);
        answer += 1;
      } else {
        chairs.shift();
        chairs.push(animal);
        answer += 60;
      }
    }
  }
  return `${parseInt(answer / 60)}분 ${answer % 60}초`;
}

console.log(solution(animals));
