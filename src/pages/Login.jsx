import { signInWithEmailAndPassword } from "@firebase/auth"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import {auth} from '../firebase/firebaseConfig'



const Login = () => {

  const [error , setError] = useState(false)
  const email = useRef()
  const password = useRef()

  const navigate = useNavigate()

  const loginUser = (event) => {
    event.preventDefault()
    console.log(email.current.value);
    console.log(password.current.value);

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate('/')

      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage)

      });


  }
  return (
    <>
      <h1 className='text-center' style={{fontSize:50,fontFamily:'sans-serif'}}>Login</h1>
      <form onSubmit={loginUser}>
       <div className="justify-center"> 
       <input type="email" placeholder='enter your email' ref={email} style={{border:2, justifyContent:'center', alignItems:'center'}}/><br/>
        <input type="password" placeholder='enter your password' ref={password} /><br/>
        <button className="btn btn-outline btn-primary mt-4">LOGIN</button>
       </div>
      </form>

      <p>{error && error}</p>
    </>
  )
}

export default Login