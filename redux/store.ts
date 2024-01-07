import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./features/SideBarSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import PostModalSlice from "./features/PostModalSlice";
import PostInputSlice from "./features/PostInputSlice";

export const store = configureStore({
    reducer: {
        SideBarSlice,
        PostModalSlice,
        PostInputSlice
        }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
