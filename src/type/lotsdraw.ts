export interface TLotsDraw {
  id: string;
  sport_id: string;
  team_id: string;
  has_ranking?: boolean;
  ticket_index: number;
  match_hour?: string;
  match_date?: string;
  locations?: string;

  org_id?: string;

  row_num?: number;

  team_name?: string;
}
