import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import userInfo from '../modules/member';
import sellerInfo from '../modules/goodsSeller';
import buyerInfo from '../modules/goodsBuyer';

const store = configureStore(
    {
        reducer: { userInfo, sellerInfo, buyerInfo },
    },
    composeWithDevTools()
);

export default store;
