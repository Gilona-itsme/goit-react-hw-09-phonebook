import { createStore, combineReducers } from 'redux';
import contactsReducer from './contactsReducer';
//import filterReducer from "./filterReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
