import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalName: '',
};

const themeSlice = createSlice({
  name: 'theme',
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

export const { showModal, hideModal } = themeSlice.actions;
export default themeSlice.reducer;