export const person = {
  words: "",
  say: function() {
    return this.words;
  }
};

export const afterRefactoring_person = {
  say: words => words
};
