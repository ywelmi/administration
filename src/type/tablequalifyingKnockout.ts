export interface TTablequalifyingKnockout {
  id: string;
  turn_id: string;
  team1_id: string;
  team2_id: string;
  indexs?: number;
  result?: string;
  result_detail?: string;
  win_team_id?: string;
  status?: number;
  reason?: string;
  team1_match_id?: string;
  team2_match_id?: string;
  win_match_to_id?: string;
  win_match_to_index?: string;
  lose_match_to_id?: string;
  lose_match_to_index?: string;
  name?: string;
  created?: Date;
  modified?: Date;
  recorded?: string;
  team1_set_win_count?: number;
  team1_set_lose_count?: number;
  team1_point_win_count?: number;
  team1_point_lose_count?: number;
  team2_set_win_count?: number;
  team2_set_lose_count?: number;
  team2_point_win_count?: number;
  team2_point_lose_count?: number;
  team1_name: string;
  team2_name: string;
  turn_name: string;
  grade: number;

  // Dành cho môn võ chiến đấu
  member1_name?: string;
  member2_name?: string;
}

export interface TTablequalifyingKnockoutMatchReport {
  id: string; // Table match's id
  sets: {
    team1_point: number;
    team2_point: number;
    note?: string;
  }[];
}

export interface IKnockoutCreate {
  "number_team": number;
  "has_grade_3rd": boolean;
  "sport_id": string;
  "content_id": string;
}
