import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: { isDarkmode: true },
    reducers: {
        toggleTheme: (state) => {
            state.isDarkmode = !state.isDarkmode;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export const selectIsDarkmode = (state) => state.theme.isDarkmode;

export default themeSlice.reducer;
