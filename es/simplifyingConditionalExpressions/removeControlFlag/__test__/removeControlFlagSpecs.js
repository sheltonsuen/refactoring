import { expect } from "chai";
import {
  caculateTotalMoneySum,
  afterRemoveControlFlag_caculateTotalMoneySum
} from "../removeControlFlag";

describe("removeControlFlag", () => {
  context("before remove control flag", () => {
    it("should return moeny sum of persons", () => {
      const persons = [
        { hasMoney: false, money: 20 },
        { hasMoney: true, money: 30 },
        { hasMoney: true, money: 20 }
      ];

      expect(caculateTotalMoneySum(persons)).to.be.equal(50);
    });
  });

  context("after remove control flag", () => {
    it("should return moeny sum of persons", () => {
      const persons = [
        { hasMoney: false, money: 20 },
        { hasMoney: true, money: 30 },
        { hasMoney: true, money: 20 }
      ];

      expect(afterRemoveControlFlag_caculateTotalMoneySum(persons)).to.be.equal(
        50
      );
    });
  });
});
