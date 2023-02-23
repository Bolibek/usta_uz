import { useRef } from "react";

export default function FilterModal({openWindow, setOpenWindow}) {
  const buttonsRef = useRef(null);
	return (
		<div>
			{openWindow && (
				<div className="absolute z-60 top-14 bg-white w-[950px] rounded-l-xl h-[91vh] overflow-auto ">
					<div>
						<div className="pr-14 pl-14 pt-14 pb-16 z-50">
							<h1 className="font-bold">{"Edit Profile"}</h1>
							
						</div>
						<div
							ref={buttonsRef}
							className="mt-2.5 shadow-[0_-60px_70px_-15px_rgba(0,0,0,0.1)] bg-white py-8 pr-14 pl-40 rounded-br-[20px] rounded-tr-[20px] flex sticky bottom-0 justify-between">
              <button onClick={() => setOpenWindow(false)}>Close</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
