export const ACTIONS = {
  GET_USER: 'GET_USER',
  SUCCESS: 'success',
  ERROR: 'error'
}

export const jobDetailsReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.GET_USER: {
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