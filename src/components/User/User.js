import * as S from "./style";
import Text from "../Text";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const User = ({ index, usersLength, user, lastUserElementRef}) => {
  const [isHovered, setIsHovered] = useState(false);
  const favoritesUsers = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFavoriteClicked = (user) => {
    dispatch({ type: favoritesUsers.includes(user) ? "REMOVE_FAV_USERS" : "SAVE_FAV_USERS", payload: user });
  };

  return (
    <S.User
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={index + 1 === usersLength ? lastUserElementRef : null}>

      <S.UserPicture src={user.picture.large} alt="" />
      <S.UserInfo>
        <Text size="22px" bold>
          {user.name.title} {user.name.first} {user.name.last}
        </Text>
        <Text size="14px">{user.email}</Text>
        <Text size="14px">
          {user.location.street.number} {user.location.street.name}
        </Text>
        <Text size="14px">
          {user.location.city} {user.location.country}
        </Text>
      </S.UserInfo>
      <S.IconButtonWrapper isVisible={isHovered}
                           onClick={() => handleFavoriteClicked(user)}>
        <IconButton>
          <FavoriteIcon color="error" />
        </IconButton>
      </S.IconButtonWrapper>
    </S.User>

  );

};
export default User;

