import { applyMiddleware, createStore } from 'redux';

import Reducers from '../reducers/reducer';
import ReduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

const configureStore = initialStore => {
    const store = createStoreWithMiddleware(Reducers, initialStore);

    return store;
}

const Store = configureStore();
export default Store;
