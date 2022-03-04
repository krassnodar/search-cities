import { combineReducers } from "redux";
import { streetReducer } from "./streetReducer";
import { ipReducer } from "./ipReducer";

export const rootReducer = combineReducers({
  street: streetReducer,
  ip: ipReducer
});

export type RootState = ReturnType<typeof rootReducer>;
