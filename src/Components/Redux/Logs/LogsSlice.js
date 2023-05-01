import { createSlice } from '@reduxjs/toolkit';

const LogsSlice = createSlice({
  name: 'logs',
  initialState: [],
  reducers: {
    addLog: (state, action) => {
      const timestamp = new Date().toISOString();
      state.push({
        message: action.payload,
        timestamp,
      });
    },
    deleteLog: (state, action) => {
      state.splice(action.payload, 1);
    },
    clearLogs: (state) => {
      state.length = 0;
    },
  },
});

export const { addLog, deleteLog, clearLogs } = LogsSlice.actions;

export default LogsSlice.reducer;
