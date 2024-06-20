import { LI, SVG, UL } from "../../../../AbstractElements";
import { Input } from "reactstrap";
import { Back, Href, SearchPlaceholder } from "../../../../utils/Constant";
import { Link } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { BookmarkedDataType } from "../../../../Types/Layout/Sidebar";
import { useBookmarkStore } from "../../../../store/bookmark";
import { useLayoutStore } from "../../../../store/layout";

const BookmarkBack = () => {
  const { linkItemsArray } = useBookmarkStore();
  const { handleBookmarkChange } = useBookmarkStore();
  const [searchedItems, setSearchedItems] = useState<(BookmarkedDataType)[]>(
    [],
  );
  const [searchWord, setSearchWord] = useState("");
  const { setFlip } = useLayoutStore();

  const searchItems = (e: string) => {
    let copyArray = [...linkItemsArray];
    let result = copyArray.filter((item) =>
      item.title?.toLowerCase().includes(e.toLowerCase())
    );
    setSearchedItems(result);
  };

  const handleBackButton = () => {
    setFlip();
    setSearchWord("");
  };

  const bookMarkInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
    searchItems(e.target.value);
  };
  return (
    <div className="back">
      <UL>
        <LI>
          <div className="bookmark-dropdown flip-back-content">
            <Input
              type="text"
              placeholder={SearchPlaceholder}
              onChange={(e) => bookMarkInputChange(e)}
              value={searchWord}
            />
          </div>
          <div
            className={`filled-bookmark Typeahead-menu  ${
              searchWord ? "is-open" : ""
            } custom-scrollbar`}
          >
            {searchedItems?.map((item: any, i: number) => (
              <div key={i} className="ProfileCard u-cf">
                <div className="ProfileCard-avatar">
                  <SVG iconId={`stroke-${item.icon}`} />
                </div>
                <div className="ProfileCard-details">
                  <div className="ProfileCard-realName">
                    <Link className="realname" to={Href}>{item.title}</Link>
                    <span className="pull-right">
                      <Link to={Href}>
                        <i
                          onClick={() => (handleBookmarkChange(
                            linkItemsArray[item.id - 1],
                          ))}
                          className={`fa fa-star-o mt-1 icon-star ${
                            linkItemsArray[item.id - 1].bookmarked
                              ? "starred"
                              : ""
                          }`}
                        >
                        </i>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {!searchedItems.length && <p>Opps!! There are no result found.</p>}
          </div>
        </LI>
        <LI onClick={handleBackButton}>
          <Link className="f-w-700 d-block flip-back" id="flip-back" to={Href}>
            {Back}
          </Link>
        </LI>
      </UL>
    </div>
  );
};

export default BookmarkBack;
