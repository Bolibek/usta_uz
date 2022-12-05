import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import SignInPage from "./pages/SignInPage/SignInPage";
import "./App.css";

function App() {
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [display, setDisplayNavbar] = useState("");
	useEffect(() => {
		setIsSignedIn(false);
	}, [isSignedIn]);

	return (
		<div className="">
			<Navbar status={isSignedIn} display={display} setDisplayNavbar={setDisplayNavbar} />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/signin" element={<SignInPage />} />
			</Routes>
		</div>
	);
}

export default App;
