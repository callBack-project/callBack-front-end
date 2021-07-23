import { useState} from "react"


const SignUpComponent = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  return (
    <div>
      <h1>Sign Up</h1>
      <label>
        First Name:
      <input onChange={(e : any) => setFirstName(e.target.value)} type="text" value={firstName}/>
      </label>
      <label>
        Last Name:
      <input onChange={(e : any) => setLastName(e.target.value)} type="text" value={lastName}/>
      </label>
      <label>
        Email:
      <input onChange={(e : any) => setEmail(e.target.value)} type="text" value={email}/>
      </label>
      <label>
        Password:
        <input onChange={(e : any) => setPassword(e.target.value)} type="text" value={password}/>
      </label>
      <button>Sign Up</button>
    </div>
  )
}

export default SignUpComponent