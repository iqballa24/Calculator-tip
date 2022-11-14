import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    inputBill: "",
    selectTip: 0,
    inputNumberPeople: "",
    tipAmount: 0,
    total: 0,
  },
  reducers: {
    changeInputBill(state, action) {
      state.inputBill = action.payload.bill;
    },
  },
});

export const calculatorActions = calculatorSlice.actions;

export default calculatorSlice;
