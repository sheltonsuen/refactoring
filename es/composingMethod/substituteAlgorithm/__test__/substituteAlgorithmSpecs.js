import {
  foundPerson,
  afterSubstituteAlgorithm_foundPerson
} from "../substituteAlgorithm";

describe("substituteAlgorithm", () => {
  context("before split substitute altorithm", () => {
    it("should return the person that exist in the candidates", () => {
      const persons = [{ name: "Li" }, { name: "Shelton" }];

      expect(foundPerson(persons)).to.be.deep.equal(persons[1]);
    });

    it("should return undefeined when all the persons name is not in the candidates", () => {
      const persons = [{ name: "Li" }, { name: "Suen" }];

      expect(foundPerson(persons)).to.be.undefined;
    });
  });

  context("after split temporary variable", () => {
    it("should return the person that exist in the candidates", () => {
      const persons = [{ name: "Li" }, { name: "Shelton" }];

      expect(afterSubstituteAlgorithm_foundPerson(persons)).to.be.deep.equal(
        persons[1]
      );
    });

    it("should return undefeined when all the persons name is not in the candidates", () => {
      const persons = [{ name: "Li" }, { name: "Suen" }];

      expect(foundPerson(persons)).to.be.undefined;
    });
  });
});
