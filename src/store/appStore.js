import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/UserSlice";
import moviesReducer from "../slice/MoviesSlice";
import configReducer from "../slice/ConfigSlice";
import gptReducer from "../slice/GPTSlice";


const appStore = configureStore({
    reducer: {
        user:  userReducer ,
        movies: moviesReducer,
        gpt: gptReducer , 
        config: configReducer
    }
})


export default appStore;