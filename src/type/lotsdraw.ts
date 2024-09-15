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
    isDetail?: boolean;
    content_id: string;
    content_type?: string;
}
export interface TLotsDrawUpdateAthele {
    team_id: string;
    member_id: string;
    member_name: string;
    ticket_index: number;

    clothers_number?: string;
    ticket_code: string;
    turn: number;
    turn_index: number;
}

export interface TContentSport {
    id: string;
    sport: string;
    name: string;
    code: string;
    gender?: number;
    content_type?: number;
}

export interface TLotsDrawMember {
    id: string;
    sport_id: string;
    member_id: string;
    name: string;
    org_name: string;
    rank: string;
    ticket_index: number;
    turn: number;
    turn_index: number;
    indexs: number;
    result_id?: string;
    clothers_number?: string;
    ticket_code?: string;
    group_id?: null;
    content1_record_value?: string;
    content1_point_value?: string;
    content2_record_value?: string;
    content2_point_value?: string;
    content3_record_value?: string;
    content3_point_value?: string;
    content4_record_value?: string;
    content4_point_value?: string;
    content5_record_value?: string;
    content5_point_value?: string;
}

export interface TLotsDrawMatrix {
    id: string;
    sport_id: string;
    team_id: string;
    content_id: string;
    ticket_index: number;
    turn: number;
    turn_index: number;
    indexs: number;
    ticket_code: string;
}

export interface TLotsDrawSportContent {
    field: string;
    name: string;
    id: string;
}

export interface ILotsDrawResultTemplate {
    lst_ticket_member: TLotsDrawMember[];
    lst_ticket_group: TLotsDrawMember[];
    lst_map_sport_content: TLotsDrawSportContent[];
}
