import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import{persistStore} from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./root-saga"
import rootReducer from "./root-reducer";
//import thunk from 'redux-thunk'
//const middlewares = [thunk];
// quando tava fazendo os async com o thunk.
//oq o thunk faz quando vem uma funcao ele pega ela e deixa ela ativar varias actions, so ver o video do curso de redux thunk.

const sagaMiddleware= createSagaMiddleware()

const middlewares=[sagaMiddleware]

if (process.env.NODE_ENV==='development'){
    middlewares.push(logger)
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store)
export default {store,persistor};
