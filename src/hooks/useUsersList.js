import { useCallback, useRef, useState } from "react";
import { usePeopleFetch } from "./usePeopleFetch";

export const useUsersList = () => {
  const [countriesToFilter, setCountriesToFilter] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchValue, setSearchValue] = useState();
  const natFilterQueryParam = countriesToFilter.toString();
  const { fetchedUsers, isLoading, hasMore } = usePeopleFetch(pageNumber, natFilterQueryParam, searchValue);
  const observer = useRef();

  const lastUserElementRef = useCallback(node => {
    if (isLoading) return;
    if (observer.current)
      observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    });
    if (node)
      observer.current.observe(node);
  }, [isLoading, hasMore]);

  const getUsersBySearchValue = (users, searchValue) => {
    return searchValue ? users.filter((user) => user.name.first.toLowerCase().includes(searchValue) ||
      user.name.last.toLowerCase().includes(searchValue)) : users;
  };

  const handleCheckBoxClicked = (nationality, isChecked) => {
    setCountriesToFilter(!isChecked ? [...countriesToFilter, nationality]
      : countriesToFilter.filter((country) => country !== nationality));
  };

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
    setPageNumber(1);
  };

  const usersToDisplay = getUsersBySearchValue(fetchedUsers, searchValue);

  return {
    usersToDisplay,
    lastUserElementRef,
    countriesToFilter,
    isLoading,
    fetchedUsers,
    handleCheckBoxClicked,
    handleSearch
  };
};
