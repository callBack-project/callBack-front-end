export const ACTIONS = {
  GET_JOBS: 'GET_JOBS',
  ADD_JOB: "ADD_JOB",
  DELETE_JOB: 'DELETE_JOB',
  SUCCESS: 'success',
  ERROR: 'error',
}

export const jobsDetailsReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.GET_JOBS: {
      return {
        ...state,
        loading: true,
      }
    }
    case ACTIONS.ADD_JOB: {
      return {
        ...state,
        jobsDetails: [...state.jobsDetails, action.data],
        loading: false,
      }
    }
    case ACTIONS.DELETE_JOB: {
      return {
        ...state,
        jobsDetails: state.jobsDetails.filter((item: any) => item.id !== action.data.id),
        loading: false,
      }
    }
    case ACTIONS.SUCCESS: {
      return {
        ...state,
        loading: false,
        jobsDetails: action.data,
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
  jobsDetails: [],
  loading: false,
  error: null,
}