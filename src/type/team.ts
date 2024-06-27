export interface TTeam {
  id: string;
  competition_id: string;
  org_id: string;
  has_militia: boolean;
  has_army: boolean;
  sport_id: string;
  org_name: string;
  lst_member_id: string[]; // list of teammembers' ids
}
