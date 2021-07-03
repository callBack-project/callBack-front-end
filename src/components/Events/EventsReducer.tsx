export const ACTIONS = {
  GET_EVENTS: 'GET_EVENTS',
  ADD_EVENT: "ADD_EVENT",
  DELETE_EVENT: 'DELETE_EVENT',
  SUCCESS: 'success',
  ERROR: 'error',
}

export const eventDetailsReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.GET_EVENTS: {
      return {
        ...state,
        loading: true,
      }
    }
    case ACTIONS.ADD_EVENT: {
      return {
        ...state,
        eventDetails: [...state.eventDetails, action.data],
        loading: false,
      }
    }
    case ACTIONS.DELETE_EVENT: {
      return {
        ...state,
        eventDetails: state.eventDetails.filter((item: any) => item.id !== action.data.id),
        loading: false,
      }
    }
    case ACTIONS.SUCCESS: {
      return {
        ...state,
        loading: false,
        eventDetails: action.data,
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
  eventDetails: [],
  loading: false,
  error: null,
}