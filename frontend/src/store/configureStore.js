import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducer";
import config from "../config";
const store = configureStore({
	reducer,
	devtools: config.environment === "production" ? true : false,
});
export default store;
