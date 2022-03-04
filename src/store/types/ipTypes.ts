export interface IInitialState {
  ipAddress: string;
  city: string;
  loading: boolean;
  error: string | null;
}


export enum ActionTypes {
  GET_IP_ADDRESS = 'GET_IP_ADDRESS',
  GET_IP_ADDRESS_SUCCESS = 'GET_IP_ADDRESS_SUCCESS',
  GET_IP_ADDRESS_ERROR = 'GET_IP_ADDRESS_ERROR'
}

interface IGetIpAddress {
  type: ActionTypes.GET_IP_ADDRESS,
}

interface IGetIpAddressSuccess {
  type: ActionTypes.GET_IP_ADDRESS_SUCCESS,
  payload: {
    ip: string;
    city: string;
  }
}


interface IGetIpAddressError {
  type: ActionTypes.GET_IP_ADDRESS_ERROR,
  payload: string;
}

export type IpAddressAction = IGetIpAddress | IGetIpAddressSuccess | IGetIpAddressError 