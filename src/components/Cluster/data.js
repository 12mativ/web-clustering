const getRandom = () => {
  const randomValue = Math.random();
  if (randomValue === 0) {
    return getRandom();
  }
  return randomValue;
};

const normalDistribution = () => {
  const u = getRandom();
  const v = getRandom();
  return Math.sqrt(-4.0 * Math.log(u)) * Math.cos(1.0 * Math.PI * v);
};

export const dataGenerator = (pointCount) => {
  const data = [];
  for (let i = 0; i < pointCount; i += 1) {
    data.push({
      arg1: normalDistribution(),
      val1: normalDistribution(),
      arg2: normalDistribution() + 1,
      val2: normalDistribution() + 1,
      arg3: normalDistribution() + 3,
      val3: normalDistribution() + 3,
      arg4: normalDistribution() + 4,
      val4: normalDistribution() + 4,
      arg5: normalDistribution() + 5,
      val5: normalDistribution() + 5,
    });
  }
  return data;
};
