import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsReducer';
import logger from 'redux-logger';

//console.log(process.env.NODE_ENV)
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const contactsPersistConfig = {
  key: 'phoneBook',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };

//**  Without Toolkit
//import { createStore, combineReducers } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
// import contactsReducer from './contactsReducer';
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });
//  const store = createStore(rootReducer, composeWithDevTools());
