import { STORAGE_KEY_FAVORITE_USERS } from "./constant";

export const getPersistentUsersData = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY_FAVORITE_USERS));
};

export const setPersistentUsersData = (users) => {
  localStorage.setItem(STORAGE_KEY_FAVORITE_USERS, JSON.stringify(users));
};

export const getUsersBySearchValue = (users, searchValue) => {
  return searchValue ? users.filter((user) => user.name.first.toLowerCase().includes(searchValue) ||
    user.name.last.toLowerCase().includes(searchValue)) : users
}
