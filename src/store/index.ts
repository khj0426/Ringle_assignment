import { combineReducers, configureStore } from "@reduxjs/toolkit";
import calendarReducer from "../reducers/calendar-slice";

import sessionStorage from "redux-persist/es/storage/session";
import { persistReducer, persistStore } from "redux-persist";

//새로고침 시에도 반영되게 세팅
const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["calendar"],
};

const rootReducer = combineReducers({
  calendar: calendarReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
