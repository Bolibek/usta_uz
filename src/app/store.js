import {configureStore, createSlice} from '@reduxjs/toolkit'
import stringMiddleware from '../middleWare/stringMiddleWare'

const initialState = {};
const appSlice = createSlice({
  name: "reducer",
  initialState,
  reducers: {},
});
export const store = configureStore({
  reducer: {appSlice},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(stringMiddleware),
})
