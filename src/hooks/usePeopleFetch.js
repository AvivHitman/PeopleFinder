import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = (pageNumber, natFilterQueryParam) => {
  const [fetchedUsers, setFetchedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false)

  useEffect( () => {
    fetchUsers()
  }, [pageNumber]);

  useEffect( () => {
    setFetchedUsers([]);
    fetchUsers()
  }, [natFilterQueryParam]);



  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://randomuser.me/api/?results=25&page=${pageNumber}&nat=${natFilterQueryParam}`);
      setFetchedUsers(prevUsers => {
         return [...prevUsers, ...response.data.results];
      })
      setHasMore(response.data.results.length > 0)
      setIsLoading(false)
    } catch (error) {
      console.error(error);
    }
  };

  return { fetchedUsers, isLoading, hasMore };
};
