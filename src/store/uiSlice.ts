import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { consultOpen: false, service: "" },
  reducers: {
    openConsult(state, action: PayloadAction<string | undefined>) {
      state.consultOpen = true;
      state.service = action.payload ?? "";
    },
    closeConsult(state) {
      state.consultOpen = false;
    },
  },
});

export const { openConsult, closeConsult } = uiSlice.actions;
export default uiSlice.reducer;