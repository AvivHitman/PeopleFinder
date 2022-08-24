import React from "react";
import CheckBox from "components/CheckBox";
import * as S from "./style";
import { COUNTRIES } from "../../constant";
import User from "../User";
import { useFavoritesList } from "../../hooks";

const FavoritesList = () => {
  const { usersToDisplay, countriesToFilter, handleCheckBoxClicked } = useFavoritesList();
  return (
    <S.UserList>
      <S.Filters>
        {COUNTRIES.map(({ nationality, country, index }) => {
          const isChecked = countriesToFilter.includes(nationality);
          return <CheckBox key={index} value={nationality} label={country} checked={isChecked} onChange={() => {
            handleCheckBoxClicked(nationality, isChecked);
          }} />;
        })}
      </S.Filters>
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
