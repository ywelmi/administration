import { TTurnSet } from "./matchTurn";

export interface TMartialArt {
  sport_id: string;
  code: string;
  name: string;
  indexs: number;
  gender: number;
  age_id: string;
  weight_id: string;
  id: string;

  min_member_count: number;
  member_ligible: number;
}

export interface TWeigh {
  name: string;
  min_value: number;
  max_value: number;
  id: string;
}

export interface TAge {
  name: string;
  min_value: number;
  max_value: number;
  id: string;
}

export interface TMartialArtArmyGroup {
  team_id: string;
  sport_id: string;
  name: string;
  gender: 0;
  content_id: string;
  lst_member: string[];
}

export interface TMartialArtSet extends TTurnSet {
  team1_minus_point: 0;
  team2_minus_point: 0;
  team1_plus_point: 0;
  team2_plus_point: 0;
}

export interface TMartialArtTurnWithSet {
  id: string;
  sets: TMartialArtSet[];

  // Dành cho các môn có đôi nam nữ
  lst_member_team1: string[];
  lst_member_team2: string[];
}
