import { useEffect, useState } from "react";
import { SEARCH_API_URL } from "./constants";
import {  useDispatch, useSelector } from "react-redux";
import { cacheResults } from "./searchSlice";

export default function useSearchSuggestions(searchQuery) {

  const dispatch=useDispatch();
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const cachedSearches = useSelector(store => store.search.cache);

  const getSearchSuggestions = async () => {
    let data = await fetch(SEARCH_API_URL + searchQuery);
    data = await data.text();
    let tempSearchSuggestions = [];
    data.split('[').forEach((ele, index) => {
      if (!ele.split('"')[1] || index === 1) return;
      return tempSearchSuggestions.push(ele.split('"')[1]);
    });
    //removes search results less than length 1
    tempSearchSuggestions=tempSearchSuggestions.filter(suggestion=> suggestion.length>1 );

    //caching current search results
    dispatch(cacheResults({[searchQuery]:tempSearchSuggestions}));

    tempSearchSuggestions.length > 0 ? setSearchSuggestions(tempSearchSuggestions) : setSearchSuggestions([]);
  }

  useEffect(() => {
    let timeout;

    if (cachedSearches?.hasOwnProperty(searchQuery)) {
      setSearchSuggestions(cachedSearches[searchQuery])
    } else {
      timeout = setTimeout(() => getSearchSuggestions(), 250);
    }

    return () => {
      clearTimeout(timeout);
    }
  }, [searchQuery]);

  return searchSuggestions;

}