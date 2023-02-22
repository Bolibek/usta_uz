import { configureStore, createSlice } from "@reduxjs/toolkit";
import stringMiddleware from "../middleWare/stringMiddleWare";
import { invoiceApi } from "../services/invoiceApi";

const initialState = { city: "", category: "" };
const appSlice = createSlice({
	name: "reducer",
	initialState,
	reducers: {
		handleCity: (state, action) => action.payload && { city: action.payload },
		handleCategory: (state, action) =>
			action.payload && { category: action.payload },
	},
	theme: "light",
});
const initialThemeState = {
	theme: "light",
	textColor: "text-slate-900",
	bgColor: "bg-white",
};
const themeSlice = createSlice({
	name: "themeStates",
	initialState: JSON.parse(localStorage.getItem("ustaThemes"))
		? JSON.parse(localStorage.getItem("ustaThemes"))
		: initialThemeState,
	reducers: {
		toggle: (state) =>
			state.theme === "light"
				? {
						theme: "dark",
						textColor: "text-white",
						bgColor: "bg-slate-900",
				  }
				: {
						theme: "light",
						textColor: "text-slate-900",
						bgColor: "bg-white",
				  },
	},
});
export const { toggle } = themeSlice.actions;
export const { handleCity, handleCategory } = appSlice.actions;
const { reducer } = appSlice;

export const store = configureStore({
	reducer: {
		[invoiceApi.reducerPath]: invoiceApi.reducer,
		posts: reducer,
		themeStates: themeSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(invoiceApi.middleware, stringMiddleware),
});
