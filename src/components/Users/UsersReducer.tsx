export const ACTIONS = {
  GET_USERS: 'GET_USERS',
  ADD_USER: "ADD_USER",
  DELETE_USER: 'DELETE_USER',
  SUCCESS: 'success',
  ERROR: 'error',
}

export const userDetailsReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.GET_USERS: {
      return {
        ...state,
        loading: true,
      }
    }
    case ACTIONS.ADD_USER: {
      return {
        ...state,
        userDetails: [...state.userDetails, action.data],
        loading: false,
      }
    }
    case ACTIONS.DELETE_USER: {
      return {
        ...state,
        userDetails: state.userDetails.filter((item: any) => item.id !== action.data.id),
        loading: false,
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
    default:
      return state
  }
};

export const initialState = {
  userDetails: [],
  loading: false,
  error: null,
}