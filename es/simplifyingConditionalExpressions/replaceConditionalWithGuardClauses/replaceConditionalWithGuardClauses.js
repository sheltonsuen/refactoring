export const getInfo = person => {
  let result;

  if (person.isLocked) {
    result = "locked";
  } else if (person.isSessionExpired) {
    result = "session expired";
  } else {
    result = person.info;
  }

  return result;
};

export const afterRefactoring_getInfo = person => {
  if (person.isLocked) {
    return "locked";
  }

  if (person.isSessionExpired) {
    return "session expired";
  }

  return person.info;
};
