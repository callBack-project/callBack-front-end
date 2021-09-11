export const ACTIONS = {
  LOGIN_USER: 'LOGIN_USER',
  SUCCESS: 'success',
  ERROR: 'error'
}

export const loginReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.LOGIN_USER: {
      return {
        ...state,
        loading: true,
      }
    }
    case ACTIONS.SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.data,
        error: null
      }
    }
    case ACTIONS.ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    }
    default:
      return state
  }
};

export const initialState = {
  user: {},
  loading: false,
  error: null,
}