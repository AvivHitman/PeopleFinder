import { configureStore } from '@reduxjs/toolkit'
import { getPersistentUsersData, setPersistentUsersData } from "../utils";

const usersFromLocalStorage = getPersistentUsersData();

const favoriteUsersReducer = (state = usersFromLocalStorage, action) => {
  console.log(state)
  switch (action.type) {
    case 'REMOVE_FAV_USERS':
      const newState = state.filter(user => user !== action.payload);
      setPersistentUsersData(newState);
      return newState;

    case 'SAVE_FAV_USERS':
      if (!state.includes(action.payload)) {
        const newState = state.concat(action.payload)
        setPersistentUsersData(newState);
        return newState;
      }
      else {
        return state;
      }

    default:
      return state;
  }
}
const store = configureStore({reducer : favoriteUsersReducer});

export default store;
