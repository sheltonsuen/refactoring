export const getSelfDescription = person => {
  const weight = person.getWeight();

  if (weight < 100) {
    return "skinny";
  } else if (weight < 160) {
    return "normal";
  } else {
    return "fat";
  }
};

export const afterReplaceTempWithQuery_getSelfDescription = person => {
  if (person.getWeight() < 100) {
    return "skinny";
  } else if (person.getWeight() < 160) {
    return "normal";
  } else {
    return "fat";
  }
};
