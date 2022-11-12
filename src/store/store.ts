import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {clusterAPI} from "../services/ClusterService";

const rootReducer = combineReducers({
  [clusterAPI.reducerPath]: clusterAPI.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(clusterAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']