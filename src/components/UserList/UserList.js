import React from "react";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import * as S from "./style";
import { COUNTRIES } from "../../constant";
import User from "../User";
import { useUsersList } from "../../hooks";
import Search from "../Search";

const UserList = () => {
  const {
    usersToDisplay,
    lastUserElementRef,
    countriesToFilter,
    isLoading,
    fetchedUsers,
    handleCheckBoxClicked,
    handleSearch
  } = useUsersList();

  return (
    <S.UserList>
      <Search label="Search by name" onChange={handleSearch} />
      <S.Filters>
        {COUNTRIES.map(({ nationality, country, index }) => {
          const isChecked = countriesToFilter.includes(nationality);
          return <CheckBox key={index} value={nationality} label={country} checked={isChecked} onChange={() => {
            handleCheckBoxClicked(nationality, isChecked);
          }} />;
        })}
      </S.Filters>
      <S.List>
        {usersToDisplay.length === 0 && !isLoading ? <S.EmptyListText> No Matched Users Found </S.EmptyListText> :
          (usersToDisplay.map((user, index) => {
            return (
              <User key={index} index={index} usersLength={fetchedUsers.length} user={user}
                    lastUserElementRef={lastUserElementRef} />);
          }))}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
