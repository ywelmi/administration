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
}
