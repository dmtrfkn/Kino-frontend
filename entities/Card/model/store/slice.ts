import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Card } from '../types/card';
import { RootState } from '@/app/redux/store';

interface CardState {
  data?: Card;
}

const initialState: CardState = {};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setCard(state, action: PayloadAction<Card>) {
      state.data = action.payload;
    },
  },
});

export default cardSlice.reducer;

export const { setCard } = cardSlice.actions;

export const cardState = (state: RootState) => state.card.data;
