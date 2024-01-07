import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitalStateProps {
    value: {
        postInputText: string,
        postInputImage: string | null,
    },
}

const initialState = {
    value: {
        postInputText: '',
        postInputImage: null,
    }
} as InitalStateProps



const postinputslice = createSlice({
    name: 'postinput',
    initialState,
    reducers: {
        setInput: (state, action: PayloadAction<{ text: string; image: string | null}>) => {
          const { text, image } = action.payload;
          state.value.postInputText = text;
          state.value.postInputImage = image;
        },
        removeInputImage: (state) => {
            state.value.postInputImage = null;
        },
        clearAllInput: () => {
            return initialState;
        },
    },
})

export const {setInput, removeInputImage, clearAllInput} = postinputslice.actions;
export default postinputslice.reducer;