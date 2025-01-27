import posts from 'src/redux/reducers/posts';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    posts,
  },
});
