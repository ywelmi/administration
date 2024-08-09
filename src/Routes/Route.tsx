import { PageCompetitionRegister } from "../Pages/CompetitionRegister/ListCompetitionRegister";
import Default from "../Pages/Dashboard/Default/Default";
import { PageLotsDraw } from "../Pages/LotsDraw/ListLotsDraw";
import { PageMartialArt } from "../Pages/MartialArt/ListMartialArt";
import { MartialArtKnockout } from "../Pages/MartialArt/MartialArtKnockout";
import { PageMartialArtMilitia } from "../Pages/MartialArtMilitia/MartialArtMilitia";
import { ListOrg } from "../Pages/Org/ListOrg";
import { PageProgress } from "../Pages/Progress/ListSport";
import { PageReportResult } from "../Pages/Report Result/ReportResult";
import { PageResultExport } from "../Pages/ResultExport/ResultExport";
import { PageSport } from "../Pages/Sport/ListSport";
import { PageTablequalifying } from "../Pages/Tablequalifying/ListTablequalifying";
import { PageTablequalifyingKnockout } from "../Pages/TablequalifyingKnockout/ListTablequalifyingKnockout";
import { PageTablequalifyingMatch } from "../Pages/TablequalifyingMatch/ListTablequalifyingMatch";
import { PageTablequalifyingMatchReport } from "../Pages/TablequalifyingMatchReport/ListTablequalifyingMatchReport";
import { PageTeam } from "../Pages/Team/ListTeam";
import { PageTeammember } from "../Pages/Teammember/ListTeammember";
import { PageUser } from "../Pages/User/ListUser";

const Routes = [
    {
        path: "/dashboard",
        Component: <Default />,
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
        path: "/sport/register",
        Component: <PageCompetitionRegister />,
    },
    {
        path: "/teammember/list",
        Component: <PageTeammember />,
    },
    {
        path: "/team/list",
        Component: <PageTeam />,
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
        path: "/lotsdraw/list/:sport_id?",
        Component: <PageLotsDraw />,
    },
    {
        path: "/martialart/list",
        Component: <PageMartialArt />,
    },
    {
        path: "/martialartmilitia",
        Component: <PageMartialArtMilitia />,
    },
    {
        path: "/martialart/:sport_id/knockout/:content_id",
        Component: <MartialArtKnockout />,
    },
    {
        path: "/reportresult",
        Component: <PageReportResult />,
    },
    {
        path: "/resultexport",
        Component: <PageResultExport />,
    },
    {
        path: "/progress",
        Component: <PageProgress />,
    },
];

export default Routes;
