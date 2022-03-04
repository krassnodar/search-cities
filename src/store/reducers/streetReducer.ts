import {
  IInitialState,
  CityAction,
  ActionTypes
} from '../types/streetTypes';

const initialState = {
  streets: [],
  error: null,
  loading: false,
};


export const streetReducer = (state: IInitialState = initialState, action: CityAction): IInitialState => {
  switch (action.type) {
    case ActionTypes.FETCH_STREETS:
      return {
        ...state, loading: true, error: null
      }
    case ActionTypes.FETCH_STREETS_SUCCESS:
      return {
        loading: false, error: null, streets: action.payload
      }
    case ActionTypes.FETCH_STREETS_ERROR:
      return {
        streets: [], loading: false, error: action.payload
      }
    default:
      return state;
  }
};
