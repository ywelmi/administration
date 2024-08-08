export interface TMartialArt {
  "sport_id": string;
  "code": string;
  "name": string;
  "indexs": number;
  "gender": number;
  "age_id": string;
  "weight_id": string;
  "id": string;
}

export interface TWeigh {
  "name": string;
  "min_value": number;
  "max_value": number;
  "id": string;
}

export interface TAge {
  "name": string;
  "min_value": number;
  "max_value": number;
  "id": string;
}

export interface TMartialArtArmyGroup {
  "team_id": string;
  "sport_id": string;
  "name": string;
  "gender": 0;
  "content_id": string;
  "lst_member": string[];
}
