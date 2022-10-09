export const pagination = (currentPage, maxPage, maxButtonsToDisplay) => {
  var upperLimit = Math.min(
    maxPage,
    maxButtonsToDisplay +
      Math.max(
        0,
        currentPage - (maxButtonsToDisplay + (maxButtonsToDisplay % 2)) / 2
      )
  );
  var lowerLimit = upperLimit - (maxButtonsToDisplay - 1);

  var pages = [];

  if (lowerLimit > 1) pages.push(-1);
  for (var i = lowerLimit; i <= upperLimit; i++) {
    pages.push(i);
  }
  if (upperLimit < maxPage) pages.push(-1);

  return pages;
};
