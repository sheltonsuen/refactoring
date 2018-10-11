export const foo = bar => {
  if (bar.value < 0) {
    bar.value = 1;
  }

  return bar;
};

export const afterRemoveAssignmentsToParameters_foo = bar => {
  if (bar.value < 0) {
    return {
      ...bar,
      value: 1
    };
  }

  return bar;
};
