import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage/SignInPage";
import PostsFormPage from "../pages/PostsFormPage";
import LatestNews from "../pages/LatestNewsPage";
import ProfilePage from "../pages/ProfilePage";
import SinglePostPage from "../pages/SinglePostPage";

export default function MainRoutes({ setIsSignedIn }) {
	return (
		<div className="mt-20">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/signin"
					element={<SignInPage handleStatus={setIsSignedIn} />}
				/>
				<Route path="/postforms" element={<PostsFormPage />} />
				<Route path="/news" element={<LatestNews />} />
				<Route path="/profilePage" element={<ProfilePage />} />
				<Route path="/posts/:postId" element={<SinglePostPage />} />
			</Routes>
		</div>
	);
}
