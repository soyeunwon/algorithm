const foo = (ids) => {
  const max = Math.max(...ids);
  const min = Math.min(...ids);

  for (let i = min; i <= max; i++) {
    if (!ids.includes(i)) {
      let min = i;
      return min;
    }
    if (i >= max) {
      let min = max + 1;
      return min;
    }
  }
};

foo([0, 1, 1, 3, 4, 5]); //2
