export const ACTIONS = {
    GET_INTERVIEW_EXPERIENCES: 'GET_INTERVIEW_EXPERIENCES',
    ADD_INTERVIEW_EXPERIENCE: "ADD_INTERVIEW_EXPERIENCE",
    DELETE_INTERVIEW_EXPERIENCE: 'DELETE_INTERVIEW_EXPERIENCE',
    SUCCESS: 'success',
    ERROR: 'error',
  }
  
  export const interviewExperienceDetailsReducer = (state: any, action: any) => {
    switch (action.type) {
      case ACTIONS.GET_INTERVIEW_EXPERIENCES: {
        return {
          ...state,
          loading: true,
        }
      }
      case ACTIONS.ADD_INTERVIEW_EXPERIENCE: {
        return {
          ...state,
          interviewExperienceDetails: [...state.interviewExperienceDetails, action.data],
          loading: false,
        }
      }
      case ACTIONS.DELETE_INTERVIEW_EXPERIENCE: {
        return {
          ...state,
          interviewExperienceDetails: state.interviewExperienceDetails.filter((item: any) => item.id !== action.data.id),
          loading: false,
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
    interviewExperienceDetails: [],
    loading: false,
    error: null,
  }