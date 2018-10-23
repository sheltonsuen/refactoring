import { expect } from "chai";
import {
  getInfo,
  afterRefactoring_getInfo
} from "../replaceConditionalWithGuardClauses";

describe("replaceConditionalWithGuardClauses", () => {
  context("before replace conditional with guard clauses", () => {
    context("person is locked", () => {
      it("should return locked if the person is not session expired", () => {
        const person = { isLocked: true, isSessionExpired: false };

        expect(getInfo(person)).to.be.equal("locked");
      });
      it("should return locked if the person is session expired", () => {
        const person = { isLocked: true, isSessionExpired: true };

        expect(getInfo(person)).to.be.equal("locked");
      });
    });

    context("person is not locked", () => {
      it("should return session expired if the person is session expired", () => {
        const person = { isLocked: false, isSessionExpired: true };

        expect(getInfo(person)).to.be.equal("session expired");
      });

      it("should return person info if the person has info", () => {
        const person = {
          isLocked: false,
          isSessionExpired: false,
          info: "info"
        };

        expect(getInfo(person)).to.be.equal("info");
      });

      it("should return undefined if the person not have info", () => {
        const person = { isLocked: false, isSessionExpired: false };

        expect(getInfo(person)).to.be.undefined;
      });
    });
  });

  context("after replace conditional with guard clauses", () => {
    context("person is locked", () => {
      it("should return locked if the person is not session expired", () => {
        const person = { isLocked: true, isSessionExpired: false };

        expect(afterRefactoring_getInfo(person)).to.be.equal("locked");
      });
      it("should return locked if the person is session expired", () => {
        const person = { isLocked: true, isSessionExpired: true };

        expect(afterRefactoring_getInfo(person)).to.be.equal("locked");
      });
    });

    context("person is not locked", () => {
      it("should return session expired if the person is session expired", () => {
        const person = { isLocked: false, isSessionExpired: true };

        expect(afterRefactoring_getInfo(person)).to.be.equal("session expired");
      });

      it("should return person info if the person has info", () => {
        const person = {
          isLocked: false,
          isSessionExpired: false,
          info: "info"
        };

        expect(afterRefactoring_getInfo(person)).to.be.equal("info");
      });

      it("should return undefined if the person not have info", () => {
        const person = { isLocked: false, isSessionExpired: false };

        expect(afterRefactoring_getInfo(person)).to.be.undefined;
      });
    });
  });
});
