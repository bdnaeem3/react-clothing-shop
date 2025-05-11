import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalName: '',
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    showModal: (state, { payload }) => {
      state.modalName = payload;
    },
    hideModal: (state) => {
      state.modalName = '';
    },
  },
});

export const { showModal, hideModal } = counterSlice.actions;
export default counterSlice.reducer;