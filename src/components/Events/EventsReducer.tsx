export const ACTIONS = {
  GET_EVENTS: 'GET_EVENTS',
  SUCCESS: 'success',
  ERROR: 'error'
}

export const eventDetailsReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.GET_EVENTS: {
      return {
        ...state,
        loading: true,
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
  }
};

export const initialState = {
  eventDetails: [],
  loading: false,
  error: null,
}