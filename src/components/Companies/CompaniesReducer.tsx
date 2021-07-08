export const ACTIONS = {
  GET_COMPANIES: 'GET_COMPANIES',
  ADD_COMPANY: "ADD_COMPANY",
  DELETE_COMPANY: 'DELETE_COMPANY',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const companyDetailsReducer = (state: any, action: any) => {
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
        companyDetails: [...state.companyDetails, action.data],
        loading: false,
      }
    }
    case ACTIONS.DELETE_COMPANY: {
      return {
        ...state,
        companyDetails: state.companyDetails.filter((item: any) => item.id !== action.data.id),
        loading: false,
      }
    }
    case ACTIONS.SUCCESS: {
      return {
        ...state,
        loading: false,
        companyDetails: action.data,
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
  companyDetails: [],
  loading: false,
  error: null,
};