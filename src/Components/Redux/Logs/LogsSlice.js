import { createSlice } from '@reduxjs/toolkit';

const logsSlice = createSlice({
  name: 'logs',
  initialState: [],
  reducers: {
    addLog: (state, action) => {
      state.push(action.payload);
    },
    clearLogs: (state) => {
      state.length = 0;
    },
  },
});

export const { addLog, clearLogs } = logsSlice.actions;

export default logsSlice.reducer;
