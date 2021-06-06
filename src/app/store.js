import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import carReducer from '../features/CarSlide/carSlide'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cars: carReducer,
    },
});
