import { Redirect, useHistory } from "react-router-dom";
import { useContext } from "react"
import { ACTIONS, initialState } from '../Login/LoginReducer';
import { AppContext } from '../Context/context'

import axios from 'axios'
//import { initialState } from "../Users/UsersReducer";

const instance = axios.create({
  withCredentials: true
})

const HomeComponent = () => {
  //const { user, handleClick } = props;
  //const [state, dispatch] = useReducer(loginReducer, initialState);
  const { state, dispatch } = useContext(AppContext)
  const { user, loading, error } = state;
  const history = useHistory()
  
  const logoutSubmitHandler =  async () => {
    try {
      const response = await instance.delete('http://localhost:8080/api/auth/logout');
      await dispatch({ type: ACTIONS.SUCCESS, data: initialState.user });
      await history.push('/')
    } catch (error) {
      dispatch({ type: ACTIONS.ERROR, error: error.message || error });
    }
  }

  if (!user.id) {
    return <Redirect to="/" />;
  }

  return (
    <div className="h100 w100 flex column align-items-center justify-center">
      <div className="flex">
        {/* <img src={user.imageUrl} className="rounded mr1" /> */}
        <h1>Welcome back {user.firstName}!</h1>
      </div>
      <div>
        <button className="btn bg-red white p1 rounded" onClick={() => logoutSubmitHandler()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomeComponent
