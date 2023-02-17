import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
	const [isSignedIn, setIsSignedIn] = useState();
	const [display, setDisplayNavbar] = useState("");
	const { bgColor, textColor } = useSelector((state) => state.themeStates);
	const bodyRef = useRef(null);
	useEffect(() => {
		const root = bodyRef.current.parentElement;
		bgColor === "bg-white"
			? (root.parentElement.className = "bg-white")
			: (root.parentElement.className = "bg-slate-900");

		setIsSignedIn(false);
	}, [isSignedIn, bgColor]);
	return (
		<div ref={bodyRef} className={`App ${bgColor + " " + textColor} `}>
			<Navbar
				status={isSignedIn}
				display={display}
				setDisplayNavbar={setDisplayNavbar}
			/>
			<MainRoutes setIsSignedIn={setIsSignedIn} />
		</div>
	);
}

export default App;
