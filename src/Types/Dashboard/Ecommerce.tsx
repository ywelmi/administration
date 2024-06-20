export interface TotalProjectCardType {
    title: string;
    count: string;
    svgIcon: string;
    color: string;
    class: string
}

export interface TodayWorkTableBodyType{
    title: string;
    productName: string;
    assigned: string;
    name: string;
    days: string;
    badge: string;
    color: string;
}

export interface ImportantProjectListType {
    image: string;
    title: string;
    client: string;
    badge: string;
    color: string;
    startDate: string;
    endDate: string;
    class?:string;
    rangeValue: number;
    avatarGroup: string[];
    messages: number;
    svgIcon: string;
    comment: number;
    linkIcon: string;
    link: number;
    lastMeeting: string;
    nextMeeting: string;
}

export interface PropsImportantProjectListType{
    data : ImportantProjectListType
}

export interface AllProjectTableBodyType {
    chartId: string;
    chartOption: ApexCharts.ApexOptions;
    title: string;
    svgIcon: string;
    messages: number;
    linkIcon: string;
    link: number;
    userName: string;
    email: string;
    endDate: string;
    days:string;
    assigned:string;
    member:string;
    status:string;
    color: string;
}

export interface PropsAllProjectTableBodyType {
    data : AllProjectTableBodyType
}

export interface TopClientTableBodyType {
    image: string;
    color: string;
    name: string;
    country: string;
    email: string;
    phoneNumber: string;
}

export interface OnlineTimelineGroupType {
    id: number;
    title: string;
}

export interface OnlineTimelineItemsType {
    id: number;
    group: number;
    title: string;
    start_time: moment.Moment;
    end_time: moment.Moment;
}

export interface UserNewMessageDataType {
    image: string;
    status: boolean;
    name: string;
    message: string;
}

export interface ActivityLogCardDataType {
    image: string;
    userName: string;
    time: string;
    activity: string;
    apps: string;
    comment: string;
}