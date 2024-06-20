import { Col, Row } from "reactstrap";
import { H6, LI, SVG, UL } from "../../../../AbstractElements";
import { AddNewBookmark, Bookmark, Href } from "../../../../utils/Constant";
import { Link } from "react-router-dom";
import { useBookmarkStore } from "../../../../store/bookmark";
import { useLayoutStore } from "../../../../store/layout";

const BookmarkFront = () => {
  const { bookmarkedData } = useBookmarkStore();
  const { setFlip } = useLayoutStore();
  return (
    <div className="front">
      <H6 className="f-18 mb-0 dropdown-title">{Bookmark}</H6>
      <UL className="bookmark-dropdown">
        <LI className="custom-scrollbar">
          <Row>
            {bookmarkedData.map((item, index) => (
              <Col xs="4" className="text-center" key={index}>
                <Link to={`${item.path}`}>
                  <div className="bookmark-content">
                    <div className="bookmark-icon">
                      <SVG
                        className={`stroke-icon stroke-${
                          item.color ? item.color : "primary"
                        }`}
                        iconId={`stroke-${item.icon}`}
                      />
                    </div>
                    <span>{item.title}</span>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </LI>
        <LI className="text-center" onClick={() => (setFlip())}>
          <Link className="flip-btn f-w-700" id="flip-btn" to={Href}>
            {AddNewBookmark}
          </Link>
        </LI>
      </UL>
    </div>
  );
};

export default BookmarkFront;
