import { useReducer, useState } from "react"
import axios from 'axios';
import { userDetailsReducer, ACTIONS, initialState } from '../Users/UsersReducer';


const SignUpComponent = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [state, dispatch] = useReducer(userDetailsReducer, initialState);

  const submitForm = (user: any) => {
    user.preventDefault()
    const postUser = async () => {
      try {
        let response: any = await axios.post('http://localhost:8080/api/users', {
          firstName,
          lastName,
          email,
          password,
      });
        dispatch({ type: ACTIONS.ADD_USER, data: response.data });
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, error: error.message || error });
      }
    }
    postUser()
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={(e:any) => submitForm(e)}>
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
      </form>
    </div>
  )
}

export default SignUpComponent