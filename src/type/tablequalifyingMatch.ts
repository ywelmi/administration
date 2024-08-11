export interface TTablequalifyingMatch {
    id: string;
    table_id: string;
    team1_id: string;
    team2_id: string;
    indexs: number;
    status?: boolean;
    created?: string; //Date;
    match_day: string; //Date;
    match_time: string;
    match_hour: string; //Date;
    team1_name: string;
    team2_name: string;
    result: string;
    result_detail: string;
    team1_point?: number;
    team2_point?: number;
    team1_set_win_count?: number;
    team1_set_lose_count?: number;
    team1_point_win_count?: number;
    team1_point_lose_count?: number;
    team2_set_win_count?: number;
    team2_set_lose_count?: number;
    team2_point_win_count?: number;
    team2_point_lose_count?: number;
    modified?: string;
    recorded?: string;
    win_team_id?: string;
    match_location?: string;
    match_location_chid?: string;
}

export interface TTablequalifyingMatchReport {
    id: string; // Table match's id
    team1_point: number;
    team2_point: number;
    sets: {
        team1_point: number;
        team2_point: number;
        note?: string;
    }[];
}

export interface TTableQualifyingMember {
    id: string;
    table_id: string;
    sport_id: string;
    team_id: string;
    indexs?: number;
    point?: number;
    rating?: number;
    match_win_count?: number;
    match_lose_count?: number;
    set_win_count?: number;
    set_lose_count?: number;
    point_win_count?: number;
    point_lose_count?: number;
    has_lucky_ticket?: number;
    created?: Date;
    modified?: Date;
    rating_order?: number;
    match_team_id?: string;
    team_name: string;
    member_id: string,
}
