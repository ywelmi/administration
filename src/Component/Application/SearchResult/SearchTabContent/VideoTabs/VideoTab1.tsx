import { Col, Media } from "reactstrap";
import { H6, LI, UL } from "../../../../../AbstractElements";
import { searchTabsData } from "../../../../../Data/Application/SearchResult/SearchResult";
import { Link } from "react-router-dom";
import { Href } from "../../../../../utils/Constant";

const VideoTab1 = () => {
  return (
    <Col xxl="6">
      <H6 className="mb-2">{"About 6,000 results (0.60 seconds)"}</H6>
      {searchTabsData.slice(0, 3).map((item) => (
        <Media className="info-block d-flex" key={item.id}>
          <iframe className="me-3" width="200" height="100" src={item.videoLink}></iframe>
          <Media body>
            <Link to={Href}>{item.url}</Link>
            <H6>{item.title}</H6>
            <div className="star-ratings">
              <UL className="search-info simple-list flex-row">
                <LI>{item.star}</LI>
                <LI>{item.vote}</LI>
                <LI>{item.news}</LI>
              </UL>
            </div>
          </Media>
        </Media>
      ))}
    </Col>
  );
};

export default VideoTab1;
