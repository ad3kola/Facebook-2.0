import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  value: {
    openPostModal: boolean;
  };
}

const initialState = {
  value: {
    openPostModal: false,
  },
} as InitialStateProps;

const postmodalslice = createSlice({
  name: "postmodal",
  initialState,
  reducers: {
    openModal: (state) =>  {
        state.value.openPostModal = true;
    }, 
    closeModal: () => {
        return initialState;
    },
  },
});

export const {openModal, closeModal} = postmodalslice.actions;
export default postmodalslice.reducer;