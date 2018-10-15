export const foundPerson = persons => {
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].name === "Shelton" || persons[i].name === "Alex") {
      return persons[i];
    }
  }
};

export const afterSubstituteAlgorithm_foundPerson = persons => {
  const candidates = ["Shelton", "Alex"];

  for (person in persons) {
    for (candidate in candidates) {
      if (person.name === candidate) {
        return person;
      }
    }
  }
};
