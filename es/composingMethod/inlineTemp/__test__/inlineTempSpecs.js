import { isAFatMan, afterInlineTemp_isAFatMan } from "../inlineTemp";

describe("inline temp", () => {
  context("before inline temp", () => {
    it("should be a fat man when the weight of the man is over 160", () => {
      const person = { weight: 170 };

      expect(isAFatMan(person)).to.be.true;
    });

    it("should not be a fat men when the weight of the man is not over 160", () => {
      const person = { weight: 150 };

      expect(isAFatMan(person)).to.be.false;
    });
  });

  context("after inline temp", () => {
    it("should be a fat man when the weight of the man is over 160", () => {
      const person = { weight: 170 };

      expect(afterInlineTemp_isAFatMan(person)).to.be.true;
    });

    it("should not be a fat men when the weight of the man is not over 160", () => {
      const person = { weight: 150 };

      expect(afterInlineTemp_isAFatMan(person)).to.be.false;
    });
  });
});
