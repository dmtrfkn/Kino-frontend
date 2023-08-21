import { cardSlice } from '@/entities/Card/model/store/slice';
import { fileSlice } from '@/entities/File/model/store/slice';
import { userSlice } from '@/entities/User';
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

const createStore = () =>
  configureStore({
    reducer: {
      [userSlice.name]: userSlice.reducer,
      [fileSlice.name]: fileSlice.reducer,
      [cardSlice.name]: cardSlice.reducer,
    },
  });

export const wrapper = createWrapper<AppStore>(createStore);

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;
