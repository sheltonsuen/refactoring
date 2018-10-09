import {
  getSelfDescription,
  afterReplaceTempWithQuery_getSelfDescription
} from "../replaceTempWithQuery";

describe("getSelfDescription", () => {
  context("before replace temp with query", () => {
    it("should be skinny when the weight of the person is less than 100", () => {
      const person = { getWeight: () => 90 };

      expect(getSelfDescription(person)).to.be.equal("skinny");
    });

    it("should be normal when the weight of the person is between 100 and 160", () => {
      const person = { getWeight: () => 110 };

      expect(getSelfDescription(person)).to.be.equal("normal");
    });

    it("should be fat when the weight of the person is more than 160", () => {
      const person = { getWeight: () => 170 };

      expect(getSelfDescription(person)).to.be.equal("fat");
    });
  });

  context("after replace temp with query", () => {
    it("should be skinny when the weight of the person is less than 100", () => {
        const person = { getWeight: () => 90 };
  
        expect(afterReplaceTempWithQuery_getSelfDescription(person)).to.be.equal("skinny");
      });
  
      it("should be normal when the weight of the person is between 100 and 160", () => {
        const person = { getWeight: () => 110 };
  
        expect(afterReplaceTempWithQuery_getSelfDescription(person)).to.be.equal("normal");
      });
  
      it("should be fat when the weight of the person is more than 160", () => {
        const person = { getWeight: () => 170 };
  
        expect(afterReplaceTempWithQuery_getSelfDescription(person)).to.be.equal("fat");
      });
  });
});
