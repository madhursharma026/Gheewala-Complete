
// Want to loose data after refresh

// import { createStore } from 'redux'
// import rootReducer from './EcommerceReducer'

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// export default store



// Want to save data after refresh

import { createStore } from "redux";
import rootReducer from './UpdatedEcommerceReducer'
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage";

const persitConfig = {
    key: "persist-store",
    storage
}
const persistedReducer = persistReducer(persitConfig, rootReducer)
const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store)

export default store;





