// Node Modules
import { configureStore } from "@reduxjs/toolkit";

// Features of Counter Slice
import CounterReducer from "../features/counter/CounterSlice";
import { apiSlice } from "../features/dogs/DogsApiSlice";


export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;