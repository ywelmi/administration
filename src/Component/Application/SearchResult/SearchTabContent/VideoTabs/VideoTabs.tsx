import { Row } from "reactstrap";
import PagesSort from "../AllTabs/PagesSort";
import VideoTab1 from "./VideoTab1";
import VideoTab2 from "./VideoTab2";

const VideoTabs = () => {
  return (
    <Row>
      <VideoTab1 />
      <VideoTab2 />
      <PagesSort />
    </Row>
  );
};

export default VideoTabs;
