import React from "react";
import { Link } from "react-router-dom";
import CategoryNavbar from "../components/CategoryNavbar"
import Boxes from "../components/Boxes/Boxes"
export default function HomePage() {
	return (
		<div className="">
			<CategoryNavbar />
			<Boxes />
		</div>
	);
}
