import {useState, useEffect} from 'react'
import SignIn from '../../components/SignIn'
import SignUp from '../../components/SignUp'
export default function SignInPage({handleStatus}) {
  const [isRegistered, setIsRegistered] = useState(false)
  useEffect(() => {
    setIsRegistered(isRegistered)
  }, [isRegistered])

  return (
    <div className=" ">
      {isRegistered ? (
        <SignIn setIsRegistered={setIsRegistered} handleStatus={handleStatus} />
      ) : (
        <SignUp setIsRegistered={setIsRegistered} />
      )}
    </div>
  )
}
