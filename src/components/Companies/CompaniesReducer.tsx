export const ACTIONS = {
  GET_COMPANIES: 'GET_COMPANIES',
  ADD_COMPANY: "ADD_COMPANY",
  DELETE_COMPANY: 'DELETE_COMPANY',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const companiesDetailsReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.GET_COMPANIES: {
      return {
        ...state,
        loading: true,
      };
    }
    case ACTIONS.ADD_COMPANY: {
      return {
        ...state,
        companiesDetails: [...state.companiesDetails, action.data],
        loading: false,
      }
    }
    case ACTIONS.DELETE_COMPANY: {
      return {
        ...state,
        companiesDetails: state.companiesDetails.filter((item: any) => item.id !== action.data.id),
        loading: false,
      }
    }
    case ACTIONS.SUCCESS: {
      return {
        ...state,
        loading: false,
        companiesDetails: action.data,
      };
    }
    case ACTIONS.ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default:
      return state
  }
};

export const initialState = {
  companiesDetails: [],
  loading: false,
  error: null,
};