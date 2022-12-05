import { useState, useEffect } from "react";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
export default function SignInPage() {
	const [isRegistered, setIsRegistered] = useState(false);
	useEffect(() => {
		setIsRegistered(isRegistered);
	}, [isRegistered]);

	return (
		<div className=" mt-14">
			{isRegistered ? (
				<SignIn setIsRegistered={setIsRegistered} />
			) : (
				<SignUp setIsRegistered={setIsRegistered} />
			)}
		</div>
	);
}
