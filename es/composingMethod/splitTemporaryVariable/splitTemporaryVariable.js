export const raiseFoo = (rectangle, raise) => {
  let temp = 2 * (rectangle.width + rectangle.height);
  raise(temp);

  temp = rectangle.width * rectangle.height;
  raise(temp);
};

export const afterSplitTemporaryVariable_raiseFoo = (rectangle, raise) => {
  const perimeter = 2 * (rectangle.width + rectangle.height);
  raise(perimeter);

  const area = rectangle.width * rectangle.height;
  raise(area);
};
