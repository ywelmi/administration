import { useCallback } from "react";
import { LI, UL } from "../../../AbstractElements";
import { getFilterByValue } from "../../../Service/_getParams";
import {
  qualifyingMatchTurnCreate,
  qualifyingMatchTurnDelete,
  qualifyingMatchTurnsGet,
  qualifyingMatchTurnUpdate,
} from "../../../Service/matchTurn";
import { TTablequalifyingMatch } from "../../../type/tablequalifyingMatch";
import { useMatchTurnModal } from "../../MatchTurn/hook";
import { MatchTurnWrapper } from "../../MatchTurn/matchTurnContext";

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

  // const { increaseCounter } = useTablequalifyingMatchStore();

  // const handleReportFormClose = () => {
  //   tablequalifyingMatchReportUpdate(matchReport)
  //     .then((res) => {
  //       const { status } = res;
  //       if (status === 200) {
  //         increaseCounter();
  //       }
  //     })
  //     .then((err) => {
  //       console.log({ err });
  //     });
  // };

  // const {
  //   handleToggle: handleToggleUpdateModal,
  //   TablequalifyingMatchReportModal: TablequalifyingUpdateModal,
  // } = useMatchReportForm({ onClose: () => handleReportFormClose() });

  // const handleToggleUpdateModal = () => {
  //   ref.current?.handleToggle();
  // };

  const matchTurnsGet = useCallback(async () => {
    if (matchReport?.id) {
      // get all match turns belong to that match id
      const filter = getFilterByValue("match_id", "=", matchReport.id);
      return qualifyingMatchTurnsGet({ filter });
    }
    return Promise.reject("no match id");
  }, [matchReport?.id]);

  // const ref = useRef<IHocModalRef>(null);
  const { open: openModal, ListMatchTurn } = useMatchTurnModal();

  return (
    <UL className="action simple-list flex-row" id={tablequalifyingMatch.id}>
      <LI className="edit btn" onClick={openModal}>
        <i className="icon-pencil-alt" />
        Cập nhật
        <MatchTurnWrapper
          matchId={matchReport.id}
          matchTurnsGet={matchTurnsGet}
          matchTurnUpdate={qualifyingMatchTurnUpdate}
          matchTurnDel={qualifyingMatchTurnDelete}
          matchTurnCreate={qualifyingMatchTurnCreate}
          match={tablequalifyingMatch}
          // matchTurnSetsUpdate={qualifyingMatchTurnSetUpdate}
          // matchTurnSetsGet={qualifyingMatchTurnSetGet}
        >
          <ListMatchTurn />
          {/* <TablequalifyingUpdateModal /> */}
          {/* <HocModal title="Trận nhỏ" ref={ref} onClose={handleReportFormClose}>
            <TabMatchTurn tableType={ETable.QUALIFYING}></TabMatchTurn>
          </HocModal> */}
        </MatchTurnWrapper>
      </LI>
    </UL>
  );
};

export default TablequalifyingTableAction;
