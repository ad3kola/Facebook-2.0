import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  value: {
    opensidebar: boolean;
  };
}

const initialState = {
  value: {
    opensidebar: false,
  },
} as InitialStateProps;

const sidebarslice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSideBar: (state) =>  {
        state.value.opensidebar = true;
    }, 
    closeSideBar: () => {
        return initialState;
    },
  },
});

export const {openSideBar, closeSideBar} = sidebarslice.actions;
export default sidebarslice.reducer;