import { DUnit, DUnitType } from "../type/enum";
import { TSport } from "../type/sport";

const sportFilterByUnitType = (sports: TSport[], t: DUnitType) => {
  const filteredSports = sports.filter((s) => s.for_type === DUnit[t]);
  // console.log({ filteredSports });
  if (filteredSports) {
    return filteredSports;
  }
  return sports;
};
export { sportFilterByUnitType };
