// src/redux/modules/counterSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { uniqBy, sortBy } from 'lodash';

const initialState = {
    allgoods: [],
    cart: {},
};

const counterSlice = createSlice({
    name: 'buyerInfo',
    initialState,
    reducers: {
        addBuyerGoods: (state, action) => {
            let data = [...state.allgoods, ...action.payload];
            let newData = uniqBy(data, 'productsId');
            let sortData = sortBy(newData, 'productsId');
            return { ...state, allgoods: sortData };
        },
    },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addBuyerGoods } = counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;
