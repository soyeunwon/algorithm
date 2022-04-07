const foo = (games) => {
  let arr = games.map(
    (game) => Number(game.split(":")[0]) - Number(game.split(":")[1])
  );

  let newArr = arr.map((data) => {
    if (data > 0) {
      return 3;
    }
    if (data === 0) {
      return 1;
    }
    if (data < 0) {
      return 0;
    }
  });

  let store = 0;

  for (let i = 0; i < newArr.length; i++) {
    store += newArr[i];
  }
  return store;
};

foo(["4:1", "2:2", "1:3"]); //4
