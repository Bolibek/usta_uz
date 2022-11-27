import { useState, useEffect } from "react";
import Box from "./Box";
import data from "../../data/workers.json";

export default function Boxes() {
  const [workers, setWorkers] = useState([])
  useEffect(() => {
    setWorkers(data.workers);
  }, [workers])
  console.log(workers)
	return (
		<div className="w-full mt-5">
      <div className="w-[75%] mx-auto grid grid-cols-3 grid-flow-row gap-3">
        {workers.length && workers.map((item, index) => (
				<Box key={index} box={item} />
			))}
      </div>
			
		</div>
	);
}
