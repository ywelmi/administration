export interface TMartialArtMilitiaArmyGroupGet {
    id: string;
    team_id: string;
    sport_id: string;
    name: string;
    gender: 0;
    content_id: string;
    content_name: string;
    team_name: string;
    team_member_name: string;
    ticket_index?: number;
    match_hour?: string;
    match_date?: string;
    locations?: string;
    org_id: string;
}

export interface TMartialArtMilitiaArmyGroupCreate {
    id: string;
    team_id: string;
    sport_id: string;
    name: string;
    gender: 0;
    content_id: string;
    team_name: string;
    lst_member: string[];
}

export interface TMartialArtMilitiaResultDetail {
    sport_content_detail_id: string;
    name?: string;
    result_id: string;
    content_id: string;
    content_detail_id: string;
    record_value?: string;
    point_value?: string;
    is_ignore?: boolean;
    ignore_type?: boolean;
    ignore_content?: string;
    record_violation?: string;
    record1_value?: string;
    record2_value?: string;
    record3_value?: string;
    note?: string;
}
