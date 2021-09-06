import React, { createContext, useReducer } from 'react';
import { loginReducer, initialState } from '../Login/LoginReducer';

export const AppContext = createContext()

const { Provider } = AppContext


export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(loginReducer, initialState)
  
  return (
    <Provider value={ {state, dispatch} }>
        {props.children}
    </Provider>
  )
}