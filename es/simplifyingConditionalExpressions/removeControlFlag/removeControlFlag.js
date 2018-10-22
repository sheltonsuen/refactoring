export const caculateTotalMoneySum = persons => {
  let sum = 0;

  for (const person of persons) {
    if (person.hasMoney) {
      sum += person.money;
    }
  }

  return sum;
};

export const afterRemoveControlFlag_caculateTotalMoneySum = persons => {
  let sum = 0;

  for (const person of persons) {
    if (!person.hasMoney) continue;

    sum += person.money;
  }

  return sum;
};
