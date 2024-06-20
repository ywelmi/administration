import { LI, SVG } from "../../../../AbstractElements";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import BookmarkBack from "./BookmarkBack";
import BookmarkFront from "./BookmarkFront";

const HeaderBookmark = () => {
  const { flip } = useAppSelector((state) => state.layout);
  return (
    <LI className="onhover-dropdown">
      <SVG iconId="star" />
      <div className={`onhover-show-div bookmark-flip ${flip ? "active" : ""}`}>
        <div className="flip-card">
          <div className={`flip-card-inner ${flip ? "flipped" : ""}`}>
            <BookmarkFront />
            <BookmarkBack />
          </div>
        </div>
      </div>
    </LI>
  );
};

export default HeaderBookmark;
