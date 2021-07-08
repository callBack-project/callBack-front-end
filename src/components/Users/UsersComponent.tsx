import { useReducer, useEffect } from 'react'
import axios from 'axios';
import UsersForm from './UsersForm';
import { userDetailsReducer, ACTIONS, initialState } from './UsersReducer';


const UsersComponent = () => {
  const [state, dispatch] = useReducer(userDetailsReducer, initialState);
  const { usersDetails, loading, error } = state;
  useEffect(() => {
    dispatch({ type: ACTIONS.GET_USERS });
    const getUsers = async () => {
      try {
        let response: any = await axios.get('http://localhost:8080/api/users');

        dispatch({ type: ACTIONS.SUCCESS, data: response.data });
        return;
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, error: error.message || error });
      }
    }
    getUsers();
  }, [])

  const postUserSubmitHandler = ( data: any) => {
    const postUser = async () => {

      try {
        let response: any = await axios.post('http://localhost:8080/api/users', data);

        dispatch({ type: ACTIONS.ADD_USER, data: response.data });
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, error: error.message || error });
      }
  }
    postUser()
  }

  const deleteUser = async (id: string) => {

    try {
      let response: any = await axios.delete(`http://localhost:8080/api/users/${id}`)
      dispatch({ type: ACTIONS.DELETE_USER, data: response.data });

    } catch (error) {
      dispatch({ type: ACTIONS.ERROR, error: error.message || error });
    }
  }


  return (
    <div data-testid='usersComponent'>
      <h1>Users Component</h1>
      <UsersForm handleSubmit={postUserSubmitHandler}/>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
          <p>{error}</p>
        ) : (
            <ul>
              {usersDetails.map((user: any) => (
                <li key={user.id}>
                  <h1>{user.firstName} <span><button onClick={()=>deleteUser(user.id)}>x</button></span></h1>
                </li>
              ))}
            </ul>
      )}
    </div>
  )
}

export default UsersComponent
