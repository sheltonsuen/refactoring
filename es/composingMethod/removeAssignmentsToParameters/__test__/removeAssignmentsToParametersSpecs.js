import {
  foo,
  afterRemoveAssignmentsToParameters_foo
} from "../removeAssignmentsToParameters";

describe("removeAssignmentsToParameters", () => {
  context("before remove assignments to parameters", () => {
    it("should return bar with value equals 1", () => {
      const bar = { value: -1 };

      expect(foo(bar).value).to.be.equal(1);
    });
  });

  context("after remove assignments to parameters", () => {
    it("should return bar with value equals 1", () => {
      const bar = { value: -1 };

      expect(afterRemoveAssignmentsToParameters_foo(bar).value).to.be.equal(1);
    });
  });
});
