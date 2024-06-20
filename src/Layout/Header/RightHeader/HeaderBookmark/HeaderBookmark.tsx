import { LI, SVG } from "../../../../AbstractElements";
import { useLayoutStore } from "../../../../store/layout";
import BookmarkBack from "./BookmarkBack";
import BookmarkFront from "./BookmarkFront";

const HeaderBookmark = () => {
  const { flip } = useLayoutStore();
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
