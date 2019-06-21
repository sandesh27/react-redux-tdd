// To check if location is in northern or southern hemisphere and decide the season
export const getSeason = (lat, month) => {
  return month > 2 && month < 9 ? "Summer" : "Winter";
};
