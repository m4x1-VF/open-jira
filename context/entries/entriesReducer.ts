import { EntriesState } from "./";

type EntriesType = { type: "" };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesType
): EntriesState => {
  //   switch (action.type) {
  //     case "UI - Open Sidebar":
  //       return { ...state, sidemenuOpen: true };
  //     case "UI - Close Sidebar":
  //       return { ...state, sidemenuOpen: false };
  //     default:
  //       return state;
  //   }
};
