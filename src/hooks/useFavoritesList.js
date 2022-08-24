import { useState } from "react";
import { useSelector } from "react-redux";

export const useFavoritesList = () => {
  const favoritesUsers = useSelector((state) => state);
  const [countriesToFilter, setCountriesToFilter] = useState([]);
  const usersToDisplay = (countriesToFilter.length === 0 ? favoritesUsers : favoritesUsers.filter((user) => countriesToFilter.includes(user.nat)));

  const handleCheckBoxClicked = (nationality, isChecked) => {
    setCountriesToFilter(!isChecked ? [...countriesToFilter, nationality]
      : countriesToFilter.filter((country) => country !== nationality));
  };

  return { usersToDisplay, countriesToFilter, handleCheckBoxClicked };
};
