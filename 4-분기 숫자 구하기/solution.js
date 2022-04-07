const foo = (month) => {
  let quarter = Math.ceil(month / 3);
  if (month <= 12) {
    return quarter;
  }
};

foo(12); //4
