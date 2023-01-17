import { configureStore, createSlice } from "@reduxjs/toolkit";
import stringMiddleware from "../middleWare/stringMiddleWare";
import { invoiceApi } from "../services/invoiceApi";

const initialState = {};
const appSlice = createSlice({
	name: "reducer",
	initialState,
	reducers: {},
});
const { reducer } = appSlice;

export const store = configureStore({
	reducer: { 
    [invoiceApi.reducerPath]: invoiceApi.reducer,
    posts: reducer,
    },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(invoiceApi.middleware, stringMiddleware),
});
