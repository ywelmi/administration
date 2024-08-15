export interface TMatchTurn {
  id: string;
  match_id: string;
  name: string;
  indexs: number;
  set_count: number;
  win_set_count: number;
}

export interface TTurnSet {
  team1_point: number;
  team2_point: number;
}

export interface TMatchTurnWithSet extends TMatchTurn {
  sets: TTurnSet[];
}
