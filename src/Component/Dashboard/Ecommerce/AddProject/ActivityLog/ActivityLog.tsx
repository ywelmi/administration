import { Row } from "reactstrap";
import UpgradeNow from "./UpgradeNow";
import NewMessage from "./NewMessage";
import ActivityLogCard from "./ActivityLogCard";

const ActivityLog = () => {
  return (
    <Row>
      <ActivityLogCard />
      <NewMessage />
      <UpgradeNow />
    </Row>
  );
};

export default ActivityLog;
