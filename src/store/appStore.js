import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utlis/UserSlice";
import moviesReducer from "../utlis/MoviesSlice";
import gptReducer from "../utlis/GPTSlice";
import configReducer from "../utlis/ConfigSlice";

const appStore = configureStore({
    reducer: {
        user:  userReducer ,
        movies: moviesReducer,
        gpt: gptReducer , 
        config: configReducer
    }
})


export default appStore;