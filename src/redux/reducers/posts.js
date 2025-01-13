import { createSlice } from '@reduxjs/toolkit';

const defaultItems = [
  {
    id: 1,
    title: 'Купить молоко',
    body: 'Потребуется 2 литра молока.',
  },
  {
    id: 2,
    title: 'Купить муку',
    body: 'Для приготовления яблочного пирога необходима мука (1 пачка).',
  },
  {
    id: 3,
    title: 'Купить творог',
    body: 'На завтрак.',
  },
  {
    id: 4,
    title: 'Купить сметану и сахар',
    body: 'Для творога.',
  },
];

const initialState = {
  totalCount: defaultItems.length,
  items: defaultItems,
};

const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addItem(state, action) {
      state.totalCount = state.items.length + 1;
      state.items = action.payload;
    },

    updateItem(state, action) {
      const updatedItems = state.items.map((el) => {
        if (el.id === action.payload.id) {
          return {
            ...el,
            title: action.payload.title,
            body: action.payload.body,
          };
        }

        return el;
      });

      state.items = updatedItems;
    },

    removeItem(state, action) {
      state.totalCount = state.items.length - 1;
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },

    clearItems(state) {
      state.items = [];
      state.totalCount = 0;
    },
  },
});

export const { addItem, updateItem, removeItem, clearItems } = posts.actions;

export default posts.reducer;
