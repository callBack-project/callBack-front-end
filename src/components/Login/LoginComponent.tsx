import { Link, useHistory } from "react-router-dom";
import { useState, useContext } from "react"
// import { loginReducer, ACTIONS, initialState } from './LoginReducer';
import { ACTIONS } from './LoginReducer';
import { AppContext } from '../Context/context';
import axios from 'axios'


const LoginComponent = () => {
  //const [state, dispatch] = useReducer(loginReducer, initialState);
  //const { companyDetails, loading, error } = state;
  const { state, dispatch } = useContext(AppContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  const loginSubmitHandler =  async () => {
    const formData = {email, password}
  
    dispatch({ type: ACTIONS.LOGIN_USER })
    try {
      const response = await axios.put('http://localhost:8080/api/auth/login', formData);
      console.log('resp-->', response, 'old state ->', state)
      dispatch({ type: ACTIONS.SUCCESS, data: response.data });
      console.log('login comp state ->', state)
      history.push('/home')
    } catch (error) {
      dispatch({ type: ACTIONS.ERROR, error: error.message || error });
    }
  }


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
      <button onClick={() => loginSubmitHandler()}>Login</button>
      <p>Don't have an account?</p>
      <h3><Link to='sign-up'>Sign Up</Link></h3>
    </div>
  )
}

export default LoginComponent