import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducer";
import config from "../config";
const store = configureStore({
	reducer,
	devTools: config.environment !== "production",
});
export default store;
