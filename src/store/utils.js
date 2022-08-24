import { STORAGE_KEY_FAVORITE_USERS } from "../constant";

export const getPersistentUsersData = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY_FAVORITE_USERS));
};

export const setPersistentUsersData = (users) => {
  localStorage.setItem(STORAGE_KEY_FAVORITE_USERS, JSON.stringify(users));
};


