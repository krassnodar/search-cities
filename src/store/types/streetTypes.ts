export interface IInitialState {
  streets: any[];
  loading: boolean;
  error: string | null;
};


export enum ActionTypes {
  FETCH_STREETS = 'FETCH_STREETS',
  FETCH_STREETS_SUCCESS = 'FETCH_STREETS_SUCCESS',
  FETCH_STREETS_ERROR = 'FETCH_STREETS_ERROR'
}

interface IFetchCities {
  type: ActionTypes.FETCH_STREETS
}

interface IFetchCitiesSuccess {
  type: ActionTypes.FETCH_STREETS_SUCCESS,
  payload: any[]
}

interface IFetchCitiesError {
  type: ActionTypes.FETCH_STREETS_ERROR,
  payload: string;
}

export type CityAction = IFetchCities | IFetchCitiesSuccess | IFetchCitiesError