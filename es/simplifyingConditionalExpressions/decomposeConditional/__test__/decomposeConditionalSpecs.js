import { expect } from "chai";
import {
  bigCitySignle,
  afterDecomposeConditional_bigCitySignle
} from "../decomposeConditional";

describe("decomposeConditional", () => {
  context("before decompose conditional", () => {
    it("should return start when the city population great than 10000 and area great than 10000", () => {
      const city = { population: 10001, area: 100001 };

      expect(bigCitySignle(city)).to.be.equal("Star");
    });

    it("should return normal when the city population is no more than 10000", () => {
      const city = { population: 10000, area: 100001 };

      expect(bigCitySignle(city)).to.be.equal("Normal");
    });

    it("should return normal when the city area is no more than 100000", () => {
      const city = { population: 10001, area: 100000 };

      expect(bigCitySignle(city)).to.be.equal("Normal");
    });

    it("should return normal when the city population is no more than 10000 and area is no more than 100000", () => {
      const city = { population: 10000, area: 100000 };

      expect(bigCitySignle(city)).to.be.equal("Normal");
    });
  });

  context("after decompose conditional", () => {
    it("should return start when the city population great than 10000 and area great than 10000", () => {
      const city = { population: 10001, area: 100001 };

      expect(afterDecomposeConditional_bigCitySignle(city)).to.be.equal(
        "Star"
      );
    });

    it("should return normal when the city population is no more than 10000", () => {
      const city = { population: 10000, area: 100001 };

      expect(afterDecomposeConditional_bigCitySignle(city)).to.be.equal(
        "Normal"
      );
    });

    it("should return normal when the city area is no more than 100000", () => {
      const city = { population: 10001, area: 100000 };

      expect(afterDecomposeConditional_bigCitySignle(city)).to.be.equal(
        "Normal"
      );
    });

    it("should return normal when the city population is no more than 10000 and area is no more than 100000", () => {
      const city = { population: 10000, area: 100000 };

      expect(afterDecomposeConditional_bigCitySignle(city)).to.be.equal(
        "Normal"
      );
    });
  });
});
