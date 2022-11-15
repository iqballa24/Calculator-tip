import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    inputBill: 0,
    selectTip: 0,
    inputNumberPeople: 0,
    tipAmount: 0,
    total: 0,
  },
  reducers: {
    changeInputBill(state, action) {
      state.inputBill = action.payload;
    },
    changeInputPeople(state, action) {
      state.inputNumberPeople = action.payload;
    },
    changeSelectedTip(state, action) {
      state.selectTip = action.payload;
    },
    calculateTipAmount(state) {
      if (state.inputNumberPeople === 0 || state.selectTip === 0) {
        state.tipAmount = 0;
        return;
      }
      state.tipAmount =
        (state.inputBill * state.selectTip) / 100 / state.inputNumberPeople;
    },
    calculateTotal(state) {
      if (state.inputNumberPeople === 0 || state.selectTip === 0) {
        state.total = 0;
        return;
      }
      state.total = state.inputBill / state.inputNumberPeople + state.tipAmount;
    },
    resetCalculator(state){
      state.inputBill = 0;
      state.selectTip = 0;
      state.inputNumberPeople = 0;
      state.tipAmount = 0;
      state.total = 0;
    }
  },
});

export const calculatorActions = calculatorSlice.actions;

export default calculatorSlice;
