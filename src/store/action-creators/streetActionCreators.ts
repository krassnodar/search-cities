import { Dispatch } from "redux"
import { CityAction, ActionTypes } from "../types/streetTypes";
import { $api } from '../../helpers/api';

export const fetchStreets = (city: string, query: string) => {
  return async (dispatch: Dispatch<CityAction>) => {
    try {
      if(!query) {
        dispatch({
          type: ActionTypes.FETCH_STREETS_ERROR,
          payload: 'Поле не может быть пустым'
        })
      } else {
        dispatch({
          type: ActionTypes.FETCH_STREETS
        })

        const response = await $api.post('/suggest/address', {
          'query': JSON.stringify(`${city} ${query}`)
        });
  
        if(response.data.suggestions.length === 0) {
          dispatch({
            type: ActionTypes.FETCH_STREETS_ERROR,
            payload: 'по вашему запросу ничего не найдено'
          })
        } else {  
          dispatch({
            type: ActionTypes.FETCH_STREETS_SUCCESS,
            payload: response.data.suggestions
          });
        }
      }
    } catch(err: any) {
      console.log(err);
      dispatch({
        type: ActionTypes.FETCH_STREETS_ERROR,
        payload: err?.response?.data?.message || 'Uknown Error'
      })
    }
  }
}