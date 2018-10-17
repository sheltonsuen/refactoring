export const analysisPerson = (person, raiseAnalysis) => {
  if (person.hasChild()) {
    person.adult = true;

    raiseAnalysis(person);
  } else {
    raiseAnalysis(person);
  }
};

export const afterRefactor_analysisPerson = (person, raiseAnalysis) => {
  if (person.hasChild()) {
    person.adult = true;
  }

  raiseAnalysis(person);
};
