import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Jeca Cabingas',
  address: 'Sa lugar nga wala ka',
  phoneNumber: '123456789'
};

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    }
  }
});

export const { setName, setAddress, setPhoneNumber } = ProfileSlice.actions;
export default ProfileSlice.reducer;
