import { person, afterRefactoring_person } from "../addParameter";
import { expect } from "chai";

describe("addParameter", () => {
  it("should return the words that the person want to say", () => {
    person.words = "some thing need to say";

    expect(person.say()).to.be.equal("some thing need to say");
  });

  it("should return the words that the person want to say", () => {
    expect(afterRefactoring_person.say("some thing need to say")).to.be.equal(
      "some thing need to say"
    );
  });
});
