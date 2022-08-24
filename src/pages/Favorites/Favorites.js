import React from "react";
import Text from "components/Text";
import * as S from "../style";
import FavoritesList from "../../components/UserList/FavoritesList";

const Favorites = () => (
    <S.UsersPage>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <FavoritesList  />
      </S.Content>
    </S.UsersPage>
  );

export default Favorites;
