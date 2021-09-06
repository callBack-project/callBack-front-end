import { Redirect } from "react-router-dom";
import { useContext } from "react"
// import { loginReducer, ACTIONS, initialState } from '../Login/LoginReducer';
import { AppContext } from '../Context/context'

const HomeComponent = () => {
  //const { user, handleClick } = props;
  //const [state, dispatch] = useReducer(loginReducer, initialState);
  const { state, dispatch } = useContext(AppContext)
  const { user, loading, error } = state;
  console.log("home comp user->", state)
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
        <button className="btn bg-red white p1 rounded" /*onClick={handleClick}*/>
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomeComponent