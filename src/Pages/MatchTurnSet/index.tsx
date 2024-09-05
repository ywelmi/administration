import { ColumnDef } from "@tanstack/react-table";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { toast } from "react-toastify";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { LI, UL } from "../../AbstractElements";
import { InputMultipleSelect } from "../../Component/InputSelect";
import {
  ITanTableRef,
  TanTable,
} from "../../Component/Tables/TanTable/TanTble";
import { N } from "../../name-conversion";
import { getFilterByValue } from "../../Service/_getParams";
import {
  martialArtTurnWithSetGet,
  martialArtTurnWithSetUpdate,
} from "../../Service/martialArt";
import {
  knockoutMatchTurnSetGet,
  knockoutMatchTurnSetUpdate,
  qualifyingMatchTurnMembersGet,
  qualifyingMatchTurnSetGet,
  qualifyingMatchTurnSetUpdate,
} from "../../Service/matchTurn";
import { teamsGet } from "../../Service/team";
import { useSportStore } from "../../store/sport";
import { ETable } from "../../type/enum";
import { TMartialArtSet, TMartialArtTurnWithSet } from "../../type/martialArt";
import { TTeammeberTiny } from "../../type/teammember";
import { TurnSetContext, TurnSetProvider } from "./turnSetContext";
import { ITurnSetProvider } from "./type";

const displayColumns: ColumnDef<TMartialArtSet>[] = [
  {
    id: "actions",
    header: "#",
    cell: function Action({
      row: { index, original: matchTurn },
      column: { id },
      table,
    }) {
      const { removeSet } = useContext(TurnSetContext);

      const handleConfirmDel = useCallback(async () => {
        removeSet(index);
      }, [index, removeSet]);

      return (
        <UL className="action simple-list flex-row" id={index.toString()}>
          {/* <LI className="edit btn" onClick={() => insertRowSet(matchTurn.id)}>
            <i className="icon-pencil cursor-pointer" />
            Thêm séc
          </LI>
          <LI
            className="edit btn"
            onClick={() => handleUpdateMatchTurn(matchTurn)}
          >
            <i className="icon-signal cursor-pointer" />
            Lưu
          </LI> */}
          <LI className="delete btn" onClick={handleConfirmDel}>
            <i className="icon-trash cursor-pointer" />
          </LI>
        </UL>
      );
    },
  },
];

interface ITeamConfig
  extends Pick<
    TMartialArtTurnWithSet,
    "lst_member_team1" | "lst_member_team2"
  > {}

const MatchTurnSets = () => {
  const {
    cols,
    sets,
    insertNewSet,
    matchTurnSetsUpdate,
    matchTurn,
    // setMatchTurn,
    setSets,
    match,
    tableType,
  } = useContext(TurnSetContext);
  console.log({ matchTurnWithSets: sets, match });

  const columns = useMemo(() => {
    return [...cols, displayColumns[displayColumns.length - 1]];
  }, [cols]);

  const [teamConfig, setTeamConfig] = useState<ITeamConfig>({
    lst_member_team1: matchTurn?.lst_member_team1 || [],
    lst_member_team2: matchTurn?.lst_member_team2 || [],
  });

  useEffect(() => {
    if (tableType === ETable.QUALIFYING && match) {
      qualifyingMatchTurnMembersGet(matchTurn.id).then((res) => {
        const { data, status } = res;
        console.log({ selectedMembers: data });
        if (status === 200) {
          setTeamConfig({
            lst_member_team1:
              data
                .filter((m) => m.team_id === match.team1_id)
                .map((m) => m.member_id) || [],
            lst_member_team2:
              data
                .filter((m) => m.team_id === match.team2_id)
                .map((m) => m.member_id) || [],
          });
        }
      });
    }
  }, [match, match?.team1_id, match?.team2_id, matchTurn, tableType]);

  const tableRef = useRef<ITanTableRef<TMartialArtSet>>(null);

  const handleUpdateMatchTurn = () => {
    const tableSets = tableRef.current?.getData();
    if (!tableSets) return;
    console.log({ handleUpdateMatchTurn: matchTurn });
    const { id } = matchTurn;

    const matchTurnSubmit = {
      id,
      sets: tableSets,
      ...teamConfig,
    } as TMartialArtTurnWithSet;

    console.log({ matchTurnSubmit });
    matchTurnSetsUpdate(matchTurnSubmit)
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          toast.success(N["success"]);
          console.log({ qualifyingMatchTurnSetUpdate: data });
        }
      })
      .catch((err) => {
        toast.error(err?.data ? err.data : N["failed"]);
      });
  };

  const updateSetsFromTable = useCallback(() => {
    const tableData = tableRef.current?.getData();
    if (tableData) setSets(tableData);
  }, [setSets]);

  const handleInsertNewSet = useCallback(() => {
    updateSetsFromTable();
    insertNewSet();
  }, [insertNewSet, updateSetsFromTable]);

  return (
    <div className="table-responsive">
      <Card>
        <CardHeader className="pb-0 card-no-border">
          <div className="btn btn-primary" onClick={handleInsertNewSet}>
            <i className="fa fa-plus" />
            {"Thêm mới"}
          </div>
          {match ? (
            <TeammembersSelect
              team1_id={match.team1_id}
              team2_id={match.team2_id}
              onChange={(c) => setTeamConfig(c)}
              lst_member_team1={teamConfig.lst_member_team1}
              lst_member_team2={teamConfig.lst_member_team2}
            />
          ) : null}
        </CardHeader>
        <CardBody>
          <TanTable data={sets} columns={columns} ref={tableRef} />
        </CardBody>
        <Col md={12}>
          <div className="btn btn-primary m-4" onClick={handleUpdateMatchTurn}>
            <i className="fa fa-edit" />
            {"Lưu"}
          </div>
        </Col>
      </Card>
    </div>
  );
};

interface ITeammemberSelect
  extends Pick<
    TMartialArtTurnWithSet,
    "lst_member_team1" | "lst_member_team2"
  > {
  team1_id: string;
  team2_id: string;
  onChange: (c: ITeamConfig) => void;
}

const TeammembersSelect = ({
  team1_id,
  team2_id,
  lst_member_team1,
  onChange,
  lst_member_team2,
}: ITeammemberSelect) => {
  const [team1Mems, setTeam1Mems] = useState<TTeammeberTiny[]>([]);
  const [team2Mems, setTeam2Mems] = useState<TTeammeberTiny[]>([]);
  const { selectedSportId } = useSportStore();

  useEffect(() => {
    if (team1_id) {
      const filter = getFilterByValue([
        { f: "id", o: "=", v: team1_id },
        { f: "sport_id", o: "=", v: selectedSportId },
      ]);
      teamsGet({ filter }).then((res) => {
        const {
          data: { data },
          status,
        } = res;
        if (status === 200 && data?.length > 0) {
          const team = data[0];
          const mems: TTeammeberTiny[] = [];
          team.member_ids?.forEach((id, i) => {
            mems.push({ id, name: team.member_names?.[i] || "" });
          });
          setTeam1Mems(mems);
        }
      });
    }
  }, [team1_id, selectedSportId]);

  useEffect(() => {
    if (team2_id) {
      const filter = getFilterByValue([
        { f: "id", o: "=", v: team2_id },
        { f: "sport_id", o: "=", v: selectedSportId },
      ]);
      teamsGet({ filter }).then((res) => {
        const {
          data: { data },
          status,
        } = res;
        if (status === 200 && data?.length > 0) {
          const team = data[0];
          const mems: TTeammeberTiny[] = [];
          team.member_ids?.forEach((id, i) => {
            mems.push({ id, name: team.member_names?.[i] || "" });
          });
          setTeam2Mems(mems);
        }
      });
    }
  }, [selectedSportId, team2_id]);

  return (
    <div className="flex flex-col gap-2 mt-3">
      <InputMultipleSelect
        title="Đội 1"
        data={team1Mems}
        k="name"
        v="id"
        name="Đội 1"
        selectedData={team1Mems.filter(({ id }) =>
          lst_member_team1.includes(id)
        )}
        onSelect={(v) => {
          onChange({
            lst_member_team1: v.map(({ id }) => id),
            lst_member_team2,
          });
        }}
        onRemove={(v) => {
          onChange({
            lst_member_team1: v.map(({ id }) => id),
            lst_member_team2,
          });
        }}
      />
      <InputMultipleSelect
        title="Đội 2"
        data={team2Mems}
        k="name"
        v="id"
        name="Đội 2"
        selectedData={team2Mems.filter(({ id }) =>
          lst_member_team2.includes(id)
        )}
        onSelect={(v) => {
          onChange({
            lst_member_team2: v.map(({ id }) => id),
            lst_member_team1,
          });
        }}
        onRemove={(v) => {
          onChange({
            lst_member_team2: v.map(({ id }) => id),
            lst_member_team1,
          });
        }}
      />
    </div>
  );
};

const MatchTurnSetWrapper = (
  props: Pick<ITurnSetProvider, "tableType" | "matchTurn" | "match">
) => {
  const { tableType } = props;
  const matchTurnSetsUpdate =
    tableType === ETable.MARTIALART
      ? martialArtTurnWithSetUpdate
      : tableType === ETable.KNOCKOUT
      ? knockoutMatchTurnSetUpdate
      : qualifyingMatchTurnSetUpdate;
  const matchTurnSetsGet =
    tableType === ETable.MARTIALART
      ? martialArtTurnWithSetGet
      : tableType === ETable.KNOCKOUT
      ? knockoutMatchTurnSetGet
      : qualifyingMatchTurnSetGet;

  // console.log({ MatchTurnSetWrapperTableType: tableType, matchTurnSetsUpdate });
  return (
    <TurnSetProvider
      {...props}
      matchTurnSetsUpdate={matchTurnSetsUpdate}
      matchTurnSetsGet={matchTurnSetsGet}
    >
      <MatchTurnSets />
    </TurnSetProvider>
  );
};

export { MatchTurnSetWrapper };
