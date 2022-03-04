import {
  IInitialState,
  IpAddressAction,
  ActionTypes
} from '../types/ipTypes';

const initialState = {
  city: '',
  ipAddress: '',
  error: null,
  loading: false,
};

export const ipReducer = (state: IInitialState = initialState, action: IpAddressAction): IInitialState => {
  switch (action.type) {
    case ActionTypes.GET_IP_ADDRESS:
      return {
        ...state, loading: true
      }
    case ActionTypes.GET_IP_ADDRESS_SUCCESS:
      return {
        loading: false, error: null, ipAddress: action.payload.ip, city: action.payload.city
      }
    case ActionTypes.GET_IP_ADDRESS_ERROR:
      return {
        ...state, loading: false, error: action.payload
      }
    default:
      return state;
  }
};
