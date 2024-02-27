// Dependencies
import { configureStore } from "@reduxjs/toolkit";

// Local Files
import curTabSlice from "./curTabSlice";
import navOpenStatusSlice from "./navOpenStatusSlice";
import toLoginSlice from "./toLoginSlice";
import popoverStatusSlice from "./popoverStatusSlice";

const store = configureStore({
  reducer: {
    curTab: curTabSlice,
    navOpenStatus: navOpenStatusSlice,
    toLogin: toLoginSlice,
    popoverStatus: popoverStatusSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
