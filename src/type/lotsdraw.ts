export interface TLotsDraw {
  id: string;
  sport_id: string;
  team_id: string;
  has_ranking?: boolean;
  ticket_index: number;
  match_hour?: string;
  match_date?: string;
  locations?: string;
  org_id: string;
  row_num?: number;
  team_name?: string;
}

export interface TLotsDrawMember {
  "id": string;
  "sport_id": string;
  "member_id": string;
  "name": string;
  "org_name": string;
  "rank": string;
  "ticket_index": number;
  "turn": number;
  "turn_index": number;
  "indexs": number;

  "clothers_number"?: string;
  "ticket_code"?: string;
  "group_id"?: null;
  "content1_record_value"?: string;
  "content1_point_value"?: string;
  "content2_record_value"?: string;
  "content2_point_value"?: string;

  "content1"?: string;
  "content2"?: string;
}

export interface TLotsDrawSportContent {
  "field": string;
  "name": string;
  "id": string;
}

export interface ILotsDrawResultTemplate {
  lst_ticket_member: TLotsDrawMember[];
  lst_map_sport_content: TLotsDrawSportContent[];
}
