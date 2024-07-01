import { TTeammember } from "./teammember";

export interface TTeam {
  id: string;
  competition_id: string;
  org_id: string;
  has_militia: boolean;
  has_army: boolean;
  sport_id: string;
  sport_name?: string;
  org_name: string;
  list_member_id?: string[]; // list of teammembers' ids
  list_member_name?: string;
  list_team_member?: Partial<TTeammember>[];
}
