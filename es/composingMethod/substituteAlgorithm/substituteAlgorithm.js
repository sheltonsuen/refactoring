export const foundPerson = persons => {
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].name === "Shelton" || persons[i].name === "Alex") {
      return persons[i];
    }
  }
};

export const afterSubstituteAlgorithm_foundPerson = persons => {
  const candidates = ["Shelton", "Alex"];

  for (const person of persons) {
    for (const candidate of candidates) {
      if (person.name === candidate) {
        return person;
      }
    }
  }
};
