import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { useLocation } from "react-router-dom";
import Searching from "../components/layout/Searching";
import SearchResults from "../components/layout/SearchResults";
import DefaultSearch from "../components/layout/DefaultSearch";

export default function Search() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query") || "";

  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState(searchQuery);

  useEffect(() => {
    setQuery(searchQuery);
    setSearchValue(query);
  }, [searchQuery]);

  return (
    <>
      <SearchBar
        focused={focused}
        setFocused={setFocused}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {searchValue && focused ? (
        <Searching searchValue={searchValue} />
      ) : query ? (
        <SearchResults query={query} />
      ) : (
        <DefaultSearch />
      )}
    </>
  );
}
