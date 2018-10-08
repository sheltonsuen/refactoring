export const isAFatMan = person => {
  const personWeight = getWeightOf(person);
  return personWeight > 160;
};

const getWeightOf = person => {
  return person && person.weight;
};

export const afterInlineTemp_isAFatMan = person => getWeightOf(person) > 160;
