export const ACTIONS = {
  GET_INTERVIEW_REPLIES_BY_INT_ID: 'GET_INTERVIEW_REPLIES_BY_INT_ID',
  SUCCESS: 'success',
  ERROR: 'error',
}

export const interviewRepliesDetailsReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.GET_INTERVIEW_REPLIES_BY_INT_ID: {
      return {
        ...state,
        loading: true,
      }
    }
    case ACTIONS.SUCCESS: {
      return {
        ...state,
        loading: false,
        interviewExperienceDetails: action.data,
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
  interviewRepliesDetails: [],
  loading: false,
  error: null,
}