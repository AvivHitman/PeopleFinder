import React from "react";
import * as S from "./style";
import User from "../User";
import { useFavoritesList } from "../../hooks";
import CountriesCheckBox from "../CountriesCheckBox";

const FavoritesList = () => {
  const { usersToDisplay, countriesToFilter, handleCheckBoxClicked } = useFavoritesList();
  return (
    <S.UserList>
      <CountriesCheckBox countriesToFilter={countriesToFilter} onChange={handleCheckBoxClicked} />
      <S.List>
        {usersToDisplay.length === 0 ? <S.EmptyListText> There is No Favorites Users</S.EmptyListText>
          : (usersToDisplay.map((user, index) => {
            return (
              <User key={index} index={index} user={user} />
            );
          }))}
      </S.List>
    </S.UserList>
  );
};

export default FavoritesList;
