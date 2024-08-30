import { ColumnDef } from "@tanstack/react-table";
import { useCallback, useContext, useMemo, useRef } from "react";
import { toast } from "react-toastify";
import { Card, CardBody, CardHeader } from "reactstrap";
import { LI, UL } from "../../AbstractElements";
import {
  ITanTableRef,
  TanTable,
} from "../../Component/Tables/TanTable/TanTble";
import { N } from "../../name-conversion";
import {
  martialArtTurnWithSetGet,
  martialArtTurnWithSetUpdate,
} from "../../Service/martialArt";
import {
  knockoutMatchTurnSetGet,
  knockoutMatchTurnSetUpdate,
  qualifyingMatchTurnSetGet,
  qualifyingMatchTurnSetUpdate,
} from "../../Service/matchTurn";
import { ETable } from "../../type/enum";
import { TMartialArtSet, TMartialArtTurnWithSet } from "../../type/martialArt";
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
      const { matchTurnSetsUpdate, removeSet, updateSet } =
        useContext(TurnSetContext);

      // const handleUpdateMatchTurn = (
      //   matchTurn: TMatchTurnWithSet | TMartialArtTurnWithSet
      // ) => {
      //   console.log({ handleUpdateMatchTurn: matchTurn });
      //   const { id, sets } = matchTurn;
      //   const matchTurnSubmit = {
      //     id,
      //     sets,
      //   };
      //   matchTurnSetsUpdate(
      //     matchTurnSubmit as (typeof matchTurnSetsUpdate.arguments)[0]
      //   )
      //     .then((res) => {
      //       const { status, data } = res;
      //       if (status === 200) {
      //         toast.success(N["success"]);
      //         console.log({ qualifyingMatchTurnSetUpdate: data });
      //       }
      //     })
      //     .catch((err) => {
      //       toast.error(err?.data ? err.data : N["failed"]);
      //     });
      // };

      // const { insertNewSet: insertRowSet } = useContext(TurnSetContext);
      const handleConfirmDel = useCallback(async () => {
        removeSet(index);
        // console.log({ row: matchTurn });
        // table.options.meta?.removeData(index);
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

const MatchTurnSets = () => {
  const { cols, sets, insertNewSet, matchTurnSetsUpdate, matchTurn, setSets } =
    useContext(TurnSetContext);
  console.log({ matchTurnWithSets: sets });

  const columns = useMemo(() => {
    return [...cols, displayColumns[displayColumns.length - 1]];
  }, [cols]);

  const tableRef = useRef<ITanTableRef<TMartialArtSet>>(null);

  const handleUpdateMatchTurn = () => {
    const tableSets = tableRef.current?.getData();
    if (!tableSets) return;
    console.log({ handleUpdateMatchTurn: matchTurn });
    const { id } = matchTurn;

    const matchTurnSubmit: TMartialArtTurnWithSet = {
      id,
      sets: tableSets,
    };

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
    // const tableSets = tableRef.current?.getData();
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
        </CardHeader>
        <CardBody>
          <TanTable
            data={sets}
            columns={columns}
            ref={tableRef}
            // getRowId={_getRowId}
          />
        </CardBody>
        {/* {tableRef?.current?.isChanged && ( */}
        <div className="btn btn-primary" onClick={handleUpdateMatchTurn}>
          <i className="fa fa-plus" />
          {"Lưu"}
        </div>
        {/* )} */}

        {/* <div
          className="btn btn-secondary"
          onClick={() => tableRef.current?.reset()}
        >
          <i className="fa fa-plus" />
          {"Hủy thay đổi"}
        </div> */}
      </Card>
    </div>
  );
};

const MatchTurnSetWrapper = (
  props: Pick<ITurnSetProvider, "tableType" | "matchTurn">
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
