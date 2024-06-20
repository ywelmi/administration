import { createSlice } from '@reduxjs/toolkit';
import { dynamicImage } from '../../Service';
import { ContactSliceType } from '../../Types/Application/Contacts/Contacts';

const initialState: ContactSliceType = {
    users: [],
    contactFilter: false,
    contactValidation: false,
    modal: false,
    categoryModal: false,
    tempId: 0,
    history:false,
  };

  const ContactSlice = createSlice({
    name: "ContactSlice",
    initialState,
    reducers: {
      setUsers: (state, action) => {
        state.users = action.payload;
      },
      setContactFilter: (state) => {
        state.contactFilter = !state.contactFilter;
      },
      setContactValidation: (state, action) => {
        state.contactValidation = action.payload;
      },
      setModal: (state) => {
        state.modal = !state.modal;
      },
      createUser: (state, action) => {
        const userTemp = {
          id: state.users.length + 1,
          avatar: dynamicImage("user/user.png"),
          name: action.payload.name,
          sureName: action.payload.sureName,
          email: action.payload.email,
          mobile: action.payload.mobile,
        };
        state.users = [...state.users, userTemp];
      },
      setCategoryModal: (state) => {
        state.categoryModal = !state.categoryModal;
      },
      setEditData: (state, action) => {
        state.users = state.users.map((item) => (item.id === state.tempId ? action.payload : item));
      },
      setTempId: (state, action) => {
        state.tempId = action.payload;
      },
      deletedUser: (state, action) => {
        state.users = state.users.filter((data) => data.id !== action.payload);
      },
      setHistory: (state) => {
        state.history = !state.history;
      },
    },
  });
  
  export const { setHistory,deletedUser, setTempId, setEditData, setCategoryModal, createUser, setUsers, setContactFilter, setContactValidation, setModal } = ContactSlice.actions;
  
  export default ContactSlice.reducer;