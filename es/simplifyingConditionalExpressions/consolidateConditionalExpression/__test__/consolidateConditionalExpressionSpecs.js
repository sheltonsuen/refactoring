import {
  shouldLockAccount,
  afterConsolidateConditionalExpression_shouldLockAccount
} from "../consolidateConditionalExpression";
import { expect } from "chai";

describe("consolidateConditionalExpression", () => {
  context("before consolidate conditional expression", () => {
    it("should return true when the password attempes times over 3", () => {
      const account = { passwordAttemptedTimes: 4, passwordExpired: false };

      expect(shouldLockAccount(account)).to.be.true;
    });

    it("should return true when the password is expired", () => {
      const account = { passwordAttemptedTimes: 2, passwordExpired: true };

      expect(shouldLockAccount(account)).to.be.true;
    });

    it("should return true when the password is expired and the attempes time over 3", () => {
      const account = { passwordAttemptedTimes: 4, passwordExpired: true };

      expect(shouldLockAccount(account)).to.be.true;
    });

    it("should return false when the account has not password problem", () => {
      const account = { passwordAttemptedTimes: 2, passwordExpired: false };

      expect(shouldLockAccount(account)).to.be.false;
    });
  });

  context("after consolidate conditional expression", () => {
    it("should return true when the password attempes times over 3", () => {
      const account = { passwordAttemptedTimes: 4, passwordExpired: false };

      expect(afterConsolidateConditionalExpression_shouldLockAccount(account))
        .to.be.true;
    });

    it("should return true when the password is expired", () => {
      const account = { passwordAttemptedTimes: 2, passwordExpired: true };

      expect(afterConsolidateConditionalExpression_shouldLockAccount(account))
        .to.be.true;
    });

    it("should return true when the password is expired and the attempes time over 3", () => {
      const account = { passwordAttemptedTimes: 4, passwordExpired: true };

      expect(afterConsolidateConditionalExpression_shouldLockAccount(account))
        .to.be.true;
    });

    it("should return false when the account has not password problem", () => {
      const account = { passwordAttemptedTimes: 2, passwordExpired: false };

      expect(afterConsolidateConditionalExpression_shouldLockAccount(account))
        .to.be.false;
    });
  });
});
