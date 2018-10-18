export const bigCitySignle = city => {
  if (city.population > 10 * 1000 && city.area > 100 * 1000) {
    return "Star";
  }
  return "Normal";
};

const isABigCity = city => city.population > 10000 && city.area > 100000;

export const afterDecomposeConditional_bigCitySignle = city => {
  if (isABigCity(city)) {
    return "Star";
  }
  return "Normal";
};
