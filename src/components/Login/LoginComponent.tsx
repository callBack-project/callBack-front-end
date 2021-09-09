import { Link, useHistory } from "react-router-dom";
import { useState, useContext, useEffect } from "react"
// import { loginReducer, ACTIONS, initialState } from './LoginReducer';
import { ACTIONS } from './LoginReducer';
import { AppContext } from '../Context/context';
import axios from 'axios'

const instance = axios.create({
  withCredentials: true
})


const LoginComponent = () => {
  const { state, dispatch } = useContext(AppContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  const loginSubmitHandler =  async () => {
    const formData = {email, password}
  
    dispatch({ type: ACTIONS.LOGIN_USER })
    try {
      const response = await instance.put('http://localhost:8080/api/auth/login', formData);
      dispatch({ type: ACTIONS.SUCCESS, data: response.data });
      history.push('/home')
    } catch (error) {
      dispatch({ type: ACTIONS.ERROR, error: error.message || error });
    }
  }

  useEffect(() => {
    const getMe = async () => {
      dispatch({ type: ACTIONS.LOGIN_USER })
      try {
        const response: any = await instance.get('http://localhost:8080/api/auth/me');
        dispatch({ type: ACTIONS.SUCCESS, data: response.data });
        history.push('/home')
        return
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, error: error.message || error })
      }
    }
      getMe()
  }, [])


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