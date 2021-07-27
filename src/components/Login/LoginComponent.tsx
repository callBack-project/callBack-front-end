import { Link } from "react-router-dom";
import { useState } from "react"

const LoginComponent = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  return (
    <div>
      <h1>Login</h1>
      <label>
        Email:
      <input onChange={(e : any) => setEmail(e.target.value)} type="text" value={email}/>
      </label>
      <label>
        Password:
        <input onChange={(e : any) => setPassword(e.target.value)} type="text" value={password}/>
      </label>
      <button>Login</button>
      <p>Don't have an account?</p>
      <h3><Link to='sign-up'>Sign Up</Link></h3>
    </div>
  )
}

export default LoginComponent