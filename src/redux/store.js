import { combineReducers, createStore } from "redux";
import menuReducer from "./reducers/menuReducer";
import shadowReducer from "./reducers/shadowReducer";
import textReducer from './reducers/textReducer'
import spacesReducer from './reducers/spacesReducer'
import resultVisualReducer from './reducers/resultVisualReducer'

let reducers = combineReducers({
    shadowReducer,
    menuReducer,
    textReducer,
    spacesReducer, 
    resultVisualReducer
})

const store = createStore(reducers)
// window.store = store
export default store