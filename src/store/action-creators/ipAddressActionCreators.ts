import { Dispatch } from "redux"
import { $api } from '../../helpers/api';
import { ActionTypes, IpAddressAction} from '../types/ipTypes';
import axios from "axios";

export const getIpAddress = () => {
  return async (dispatch: Dispatch<IpAddressAction>) => {
    try {
      dispatch({
        type: ActionTypes.GET_IP_ADDRESS
      })

      // Расширение в браузере AdBlock может блокировать исходящий запрос на получение айпи-адреса,
      // 2 запроса сделал потому что не нашел открытый АПИ, который возвращал бы название города по айпи на русском языке 

      const responseIp = await axios.get('https://api.ipify.org?format=json');
      const responseCity = await $api.get(`/iplocate/address?ip=${responseIp.data.ip}`);

      dispatch({
        type: ActionTypes.GET_IP_ADDRESS_SUCCESS,
        payload: {
          ip: responseIp.data.ip,
          city: responseCity.data.location.data.city
        }
      });

    } catch(err: any) {
      console.log(err);
      dispatch({
        type: ActionTypes.GET_IP_ADDRESS_ERROR,
        payload: err?.response?.data?.message || 'Uknown Error'
      })
    }
  }
}