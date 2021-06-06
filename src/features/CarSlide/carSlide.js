import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    value: ["Model X", "Model Y", "Model Z"]
};
const carSlide = createSlice({
    name: "cars",
    initialState,
    reducer: {}
})
export const Listcar = state => state.cars.value
export default carSlide.reducer

