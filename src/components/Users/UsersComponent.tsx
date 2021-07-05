import { useReducer, useEffect } from 'react'
import axios from 'axios';

const ACTIONS = {
  GET_USERS: 'GET_USERS',
  SUCCESS: 'success',
  ERROR: 'error'
}

const userDetailsReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.GET_USERS: {
      return {
        ...state,
        loading: true,
      }
    }
    case ACTIONS.SUCCESS: {
      return {
        ...state,
        loading: false,
        userDetails: action.data,
      }
    }
    case ACTIONS.ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    }
  }
};

const initialState = {
  userDetails: [],
  loading: false,
  error: null,
}


const UsersComponent = () => {
  const [state, dispatch] = useReducer(userDetailsReducer, initialState);
  const { userDetails, loading, error } = state;
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
  return (
    <div data-testid='usersComponent'>
      <h1>Users Component</h1>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
          <p>{error}</p>
        ) : (
            <ul>
              {userDetails.map((user: any) => (
                <li key={user.id}>
                  <h1>{user.firstName}</h1>
                </li>
              ))}
            </ul>
      )}
    </div>
  )
}

export default UsersComponent
