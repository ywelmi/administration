export interface TMatchTurn {
  id: string;
  match_id: string;
  name: string;
  indexs: number;
  set_count: number;
  win_set_count: number;
}

export interface TMatchTurnResult extends TMatchTurn {
  win_team_id: string;
  team1_set_win_count: number;
  team2_set_win_count: number;
}

export interface TTurnSet {
  // for add Only
  team1_point: number;
  team2_point: number;
  note?: string;

  editable?: boolean; // for editing in UI
}

export interface TDetailedTurnSet extends TTurnSet {
  // for update Only
  table_id: string;
  indexs: number;
  win_team_id: string;
  match_turn_id: string;
  id: string;
}

// export interface TMatchTurnWithSet extends TMatchTurn {
//   sets: TTurnSet[];
// }
