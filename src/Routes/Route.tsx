import { PageLotsDraw1 } from "../Pages/LotsDraw/PageLotsdraw";
import { PageMartialArt } from "../Pages/MartialArt/ListMartialArt";
import { MartialArtKnockout } from "../Pages/MartialArt/MartialArtKnockout";
import { PageMartialArtMilitia } from "../Pages/MartialArtMilitia/PageMartialArtMilitia";

import { ListOrg } from "../Pages/Org/ListOrg";
import { PageExportAtheleType1 } from "../Pages/Report Result/ListMemberExportByAllContentType1";
import { PageExportAtheleType2 } from "../Pages/Report Result/ListMemberExportByAllContentType2";
import { PageExportAtheleType3 } from "../Pages/Report Result/ListMemberExportByAllContentType3";
import { PageExportAtheleByTeam } from "../Pages/Report Result/ListMemberExportByTeams";

import { PageReportResult } from "../Pages/Report Result/ReportResult";
import { PageResultExport } from "../Pages/ResultExport/ResultExport";
import { PageSport } from "../Pages/Sport/ListSport";
import { PageTablequalifying } from "../Pages/Tablequalifying/ListTablequalifying";
import { PageTablequalifyingKnockout } from "../Pages/TablequalifyingKnockout/ListTablequalifyingKnockout";
import { PageTablequalifyingMatch } from "../Pages/TablequalifyingMatch/ListTablequalifyingMatch";
import { PageTablequalifyingMatchReport } from "../Pages/TableQualifyingMatchReport/ListMatchReport";
import { PageTeamNew } from "../Pages/Team/ListTeamNew";
import { PageTeammember } from "../Pages/Teammember/ListTeammember";
import { PageUser } from "../Pages/User/ListUser";

const Routes = [
    {
        path: "/dashboard",
        Component: <PageSport />,
    },
    {
        path: "/user/list",
        Component: <PageUser />,
    },
    {
        path: "/org/list",
        Component: <ListOrg />,
    },
    {
        path: "/sport/list",
        Component: <PageSport />,
    },
    {
        path: "/teammember/list",
        Component: <PageTeammember />,
    },
    {
        path: "/team/list",
        Component: <PageTeamNew />,
    },
    {
        path: "/tablequalifyings/list/:sport_id?",
        Component: <PageTablequalifying />,
    },
    {
        path: "/tablequalifyings/match/:table_id?",
        Component: <PageTablequalifyingMatch />,
    },
    {
        path: "/tablequalifyings/match-report/:table_id?",
        Component: <PageTablequalifyingMatchReport />,
    },
    {
        path: "/tablequalifyings/knockout/:sport_id",
        Component: <PageTablequalifyingKnockout />,
    },
    {
        path: "/tablequalifyings/knockout",
        Component: <PageTablequalifyingKnockout />,
    },
    {
        path: "/lotsdraw/list/:sport_id?",
        Component: <PageLotsDraw1 />,
    },
    {
        path: "/martialart/list",
        Component: <PageMartialArt />,
    },
    {
        path: "/martialart/:sport_id/knockout/:content_id",
        Component: <MartialArtKnockout />,
    },
    {
        path: "/martialartmilitia",
        Component: <PageMartialArtMilitia />,
    },
    {
        path: "/resultexport",
        Component: <PageResultExport />,
    },
    {
        path: "/reportresult",
        Component: <PageReportResult />,
    },
    {
        path: "/export/org/listathele",
        Component: <PageExportAtheleByTeam />,
    },
    {
        path: "/export/sport/type1",
        Component: <PageExportAtheleType1 />,
    },
    {
        path: "/export/sport/type3",
        Component: <PageExportAtheleType3 />,
    },
    {
        path: "/export/sport/type2",
        Component: <PageExportAtheleType2 />,
    },
];

export default Routes;
