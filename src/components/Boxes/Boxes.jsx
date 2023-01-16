import {useState, useEffect} from 'react'
import Box from './Box'
import { useWorkerPostsQuery, useEmployerPostsQuery } from '../../services/invoiceApi'
import data from '../../data/workers.json'

export default function Boxes() {
  const [workers, setWorkers] = useState([])
  const [employers, setEmployers] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const {workersData, isLoading: isWorkersLoading, isSuccess: isWorkersSuccess} = useWorkerPostsQuery()
  const {emolyersData, isLoading: isEmployersLoading, isSuccess: isEpmloyersSuccess} = useEmployerPostsQuery()
  useEffect(() => {
    setWorkers(data.workers)
    setEmployers(emolyersData)
    setAllUsers()
  }, [workers])
  console.log(workers)
  return (
    <div className="w-full mt-5">
      <div className="w-[75%] mx-auto grid grid-cols-3 grid-flow-row gap-3">
        {workers.length &&
          workers.map((item, index) => <Box key={index} box={item} />)}
      </div>
    </div>
  )
}
