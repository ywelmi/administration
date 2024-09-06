import { useCallback } from "react";
import { LI, UL } from "../../AbstractElements";
import { getFilterByValue } from "../../Service/_getParams";
import {
  qualifyingMatchTurnCreate,
  qualifyingMatchTurnDelete,
  qualifyingMatchTurnsGet,
  qualifyingMatchTurnUpdate,
} from "../../Service/matchTurn";
import { tablequalifyingMatchResultUpdate } from "../../Service/tablequalifyingMatch";
import { useTablequalifyingMatchStore } from "../../store/tablequalifyingMatch";
import { ETable } from "../../type/enum";
import { TTablequalifyingMatch } from "../../type/tablequalifyingMatch";
import { useMatchTurnModal } from "../MatchTurn/hook";
import { MatchTurnWrapper } from "../MatchTurn/matchTurnContext";

type TTablequalifyingColumn = TTablequalifyingMatch;

const TablequalifyingTableAction = ({
  tablequalifyingMatch,
}: {
  tablequalifyingMatch: TTablequalifyingColumn;
}) => {
  const matchReport = {
    team1_name: tablequalifyingMatch.team1_name,
    team2_name: tablequalifyingMatch.team2_name,
    id: tablequalifyingMatch.id,
    team1_point: 0,
    team2_point: 0,
    sets: [],
  };

  const matchTurnsGet = useCallback(async () => {
    if (matchReport?.id) {
      // get all match turns belong to that match id
      const filter = getFilterByValue({
        f: "match_id",
        o: "=",
        v: matchReport.id,
      });
      return qualifyingMatchTurnsGet({ filter });
    }
    return Promise.reject("no match id");
  }, [matchReport?.id]);

  // const ref = useRef<IHocModalRef>(null);
  const { increaseCounter } = useTablequalifyingMatchStore();
  const handleCloseModal = useCallback(() => {
    tablequalifyingMatchResultUpdate(tablequalifyingMatch.id).then((res) => {
      const { status } = res;
      if (status === 200) {
        increaseCounter();
      }
    });
  }, [increaseCounter, tablequalifyingMatch.id]);

  const { open: openModal, ListMatchTurn } = useMatchTurnModal({
    onClose: handleCloseModal,
  });

  return (
    <UL className="action simple-list flex-row" id={tablequalifyingMatch.id}>
      <LI className="edit btn" onClick={openModal}>
        <i className="icon-pencil-alt" />
        Cập nhật kết quả
        <MatchTurnWrapper
          matchId={matchReport.id}
          matchTurnsGet={matchTurnsGet}
          matchTurnUpdate={qualifyingMatchTurnUpdate}
          matchTurnDel={qualifyingMatchTurnDelete}
          matchTurnCreate={qualifyingMatchTurnCreate}
          match={tablequalifyingMatch}
          tableType={ETable.QUALIFYING}
        >
          <ListMatchTurn />
        </MatchTurnWrapper>
      </LI>
    </UL>
  );
};

export default TablequalifyingTableAction;
