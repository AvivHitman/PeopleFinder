import React from "react";
import Spinner from "components/Spinner";
import * as S from "./style";
import User from "../User";
import { useUsersList } from "../../hooks";
import Search from "../Search";
import CountriesCheckBox from "../CountriesCheckBox";

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
      <CountriesCheckBox countriesToFilter={countriesToFilter} onChange={handleCheckBoxClicked} />
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
