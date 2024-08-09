import { Button } from "reactstrap";
import { toast } from "react-toastify";
import { N } from "../../name-conversion";
import { tablequalifyingKnockoutPairInfoUpdate } from "../../Service/tablequalifyingKnockout";
import { IKnockoutRoundPair } from "../../type/tablequalifyingKnockout";
import { useKnockoutContext } from "./context";
import { useRoundUpdateModal } from "./RoundUpdatePairModal";

interface IRound {
  title: React.ReactNode;
  roundIndex: number;
}

const Round = ({ title, roundIndex }: IRound) => {
  const { listTablequalifyingKnockout, rounds } = useKnockoutContext();
  const round = rounds[roundIndex];
  const knockoutPairs = listTablequalifyingKnockout.filter(
    (t) => t.grade === round.grade
  );
  // console.log({ knockoutPairs: knockoutPairs, listTablequalifyingKnockout });
  const { RoundKnockoutModal, handleToggle } = useRoundUpdateModal({
    knockoutRoundPairs: knockoutPairs,
    onSubmit: (pairs) => {
      console.log({ pairs });
      Promise.all(
        pairs.map((pair) => {
          const { id, match_day, match_hour, match_location, match_time } =
            pair;
          const pairInfo = {
            id,
            match_day,
            match_hour,
            match_location,
            match_time,
          };
          console.log({ pairInfo });
          return tablequalifyingKnockoutPairInfoUpdate(
            pairInfo as IKnockoutRoundPair
          );
        })
      )
        .then(() => {
          toast.success(N["success"]);
          console.log("round pair successfully");
        })
        .catch((err) => {
          toast.error(err.data ? err.data : N["error"]);
          console.error(err);
        });
    },
  });
  return (
    <div style={{ textAlign: "center", color: "red" }}>
      <div>{title}</div>
      <Button color="primary" onClick={handleToggle}>
        Lập lịch
      </Button>
      <RoundKnockoutModal />
    </div>
  );
};
const CustomRoundComponent = (title: React.ReactNode, roundIndex: number) => {
  return <Round title={title} roundIndex={roundIndex} />;
};

export { CustomRoundComponent };
