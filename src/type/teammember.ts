export interface TTeammember {
  id: string;
  team_id?: string;
  name: string;
  rank: number;
  created?: string;
  gender: number;
  dob?: string;
  team_name: string;

  "date_join_army": string;
  "org_id": string;
  "org_name": null;
  "competition_id": string;
  "weights": string;
  "competition_name"?: string;
}

export type TKeyTeammember = keyof TTeammember;
