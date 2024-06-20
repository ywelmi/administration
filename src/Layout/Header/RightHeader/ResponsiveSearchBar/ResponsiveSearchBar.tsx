import { Form, Input, InputGroup } from "reactstrap";
import { LI, SVG } from "../../../../AbstractElements";
import { Search } from "../../../../utils/Constant";
import { ChangeEvent, useEffect, useState } from "react";
import { MenuItem, SearchSuggestionItem } from "../../../../Types/Layout/Sidebar";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { MenuList } from "../../../../Data/Layout/Sidebar";
import { setResponsiveSearch } from "../../../../ReduxToolkit/Reducer/LayoutSlice";
import SearchSuggestionList from "./SearchSuggestionList";
import { getLinkItemsArray } from "../../../../ReduxToolkit/Reducer/BookmarkHeaderSlice";

const ResponsiveSearchBar = () => {
  const [arr, setArr] = useState<SearchSuggestionItem[]>([]);
  const [searchedWord, setSearchedWord] = useState<string>("");
  const [searchedArray, setSearchedArray] = useState<SearchSuggestionItem[]>([]);
  const dispatch = useAppDispatch()

  useEffect(() => {
    const suggestionArray: SearchSuggestionItem[] = [];
    let num = 0;
    const getAllLink = (item: MenuItem, icon: string | undefined) => {
      if (item.children) {
        item.children.forEach((ele) => {
          getAllLink(ele, icon);
        });
      } else {
        num = num + 1;
        suggestionArray.push({ icon: icon, title: item.title, path: item.path ? item.path : '' , bookmarked: false, id: num });
      }
    };
    MenuList?.forEach((item) => {
      item.Items?.forEach((child) => {
        getAllLink(child, child.icon);
      });
    });
    setArr(suggestionArray);
    dispatch(getLinkItemsArray(suggestionArray));
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (!searchedWord) setSearchedWord("");
    setSearchedWord(e.target.value);
    let result = arr.filter((item) =>item.title?.toLowerCase().includes(e.target.value.toLowerCase()));
    setSearchedArray(result);
  };

  return (
    <LI className="d-md-block d-none">
      <Form className="search-form mb-0">
        <InputGroup>
          <span className="input-icon">
            <SVG iconId="search-header" onClick={()=>dispatch(setResponsiveSearch())} />
            <Input className="w-100" type="search" placeholder={Search} onChange={(e) => handleSearch(e)} value={searchedWord} />
          </span>
        </InputGroup>
        <div className={`Typeahead-menu w-100 custom-scrollbar ${searchedWord.length ? "is-open" : ""}`}>
          <SearchSuggestionList searchedArray={searchedArray} setSearchedWord={setSearchedWord}/>
        </div>
      </Form>
    </LI>
  );
};

export default ResponsiveSearchBar;
