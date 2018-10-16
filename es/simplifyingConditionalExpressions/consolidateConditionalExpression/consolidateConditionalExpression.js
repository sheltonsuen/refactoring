export const shouldLockAccount = account => {
  if (account.passwordAttemptedTimes > 3) {
    return true;
  }

  if (account.passwordExpired) {
    return true;
  }

  return false;
};

export const afterConsolidateConditionalExpression_shouldLockAccount = account => {
  if (isPasswordHasProblem(account)) {
    return true;
  }

  return false;
};

const isPasswordHasProblem = account => {
  return account.passwordAttemptedTimes > 3 || account.passwordExpired;
};
