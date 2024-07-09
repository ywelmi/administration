export interface TTablequalifyingMatch {
  id: string;
  table_id: string;
  team1_id: string;
  team2_id: string;
  indexs: number;
  status?: boolean;
  created?: string; //Date;
  match_day: string; //Date;
  match_hour: string;
  team1_name: string;
  team2_name: string;
  result: string;
  result_detail: string;
  team1_point?: number;
  team2_point?: number;
  team1_set_win_count?: number;
  team1_set_lose_count?: number;
  team1_point_win_count?: number;
  team1_point_lose_count?: number;
  team2_set_win_count?: number;
  team2_set_lose_count?: number;
  team2_point_win_count?: number;
  team2_point_lose_count?: number;
  modified?: string;
  recorded?: string;
  win_team_id?: string;
}

export interface TTablequalifyingMatchReport {
  id: string; // Table match's id
  team1_point: number;
  team2_point: number;
  sets: {
    team1_point: number;
    team2_point: number;
    note?: string;
  }[];
}
