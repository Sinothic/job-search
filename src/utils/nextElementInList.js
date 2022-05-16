export const nextElementInList = (list, value) => {
  const currentValueIndex = list.indexOf(value);
  const nextValueIndex =
    currentValueIndex == list.length - 1 ? 0 : currentValueIndex + 1;
  const nextValue = list[nextValueIndex];
  return nextValue;
};
