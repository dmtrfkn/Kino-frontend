import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FileType } from '../type/file';
import { RootState } from '@/app/redux/store';

interface FileState {
  data?: FileType;
}

const initialState: FileState = {};

export const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {
    setUrl(state, action: PayloadAction<FileType>) {
      state.data = action.payload;
    },
    removeUrl(state, action: PayloadAction<FileType>) {
      state.data = undefined;
    },
  },
  extraReducers: {},
});

export const { setUrl, removeUrl } = fileSlice.actions;

export const selectFile = (state: RootState) => state.file;

export default fileSlice.reducer;
