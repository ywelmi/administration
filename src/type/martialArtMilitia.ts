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
