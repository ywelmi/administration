import { DUnit, DUnitType } from "../type/enum";
import { TSport } from "../type/sport";
import { TTeam } from "../type/team";

const sportFilterByUnitType = (sports: TSport[], t: DUnitType) => {
  const filteredSports = sports.filter((s) => s.for_type === DUnit[t]);
  if (filteredSports) {
    return filteredSports;
  }
  return sports;
};

const teamFilterByUnitType = (teams: TTeam[], t: DUnitType) => {
  const filteredteams = teams.filter((s) => s.for_type === DUnit[t]);
  if (filteredteams) {
    return filteredteams;
  }
  return teams;
};

export { sportFilterByUnitType, teamFilterByUnitType };
