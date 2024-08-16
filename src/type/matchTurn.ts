export interface TMatchTurn {
  id: string;
  match_id: string;
  name: string;
  indexs: number;
  set_count: number;
  win_set_count: number;
}

export interface TTurnSet {
  // for add Only
  team1_point: number;
  team2_point: number;
  note?: string;
}

export interface TDetailedTurnSet extends TTurnSet {
  // for update Only
  table_id: string;
  indexs: number;
  win_team_id: string;
  match_turn_id: string;
  id: string;
}

export interface TMatchTurnWithSet extends TMatchTurn {
  sets: TTurnSet[];
}
