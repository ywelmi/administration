import { Form, Input, InputGroup } from "reactstrap";
import { LI, SVG } from "../../../../AbstractElements";
import { Search } from "../../../../utils/Constant";
import { setResponsiveSearch } from "../../../../ReduxToolkit/Reducer/LayoutSlice";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { MenuItem, SearchSuggestionItem } from "../../../../Types/Layout/Sidebar";
import { MenuList } from "../../../../Data/Layout/Sidebar";
import { getLinkItemsArray } from "../../../../ReduxToolkit/Reducer/BookmarkHeaderSlice";
import SearchSuggestionList from "../ResponsiveSearchBar/SearchSuggestionList";

const SearchBar = () => {
  const { responsiveSearch } = useAppSelector((state) => state.layout);
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
    <LI className="d-md-none d-block">
      <Form className={`search-form mb-0`}>
        <InputGroup>
          <span className="input-show">
            <SVG id="searchIcon" iconId="search-header" onClick={()=>dispatch(setResponsiveSearch())} />
            <div id="searchInput" className={responsiveSearch ? "show" : ""}>
              <Input type="search" placeholder={Search} onChange={(e) => handleSearch(e)} value={searchedWord} />
            </div>
          </span>
        </InputGroup>
        <div className={`Typeahead-menu w-100 custom-scrollbar ${searchedWord.length ? "is-open" : ""}`}>
          <SearchSuggestionList searchedArray={searchedArray} setSearchedWord={setSearchedWord}/>
        </div>
      </Form>
    </LI>
  );
};

export default SearchBar;
