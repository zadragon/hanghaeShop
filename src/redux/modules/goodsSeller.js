// src/redux/modules/counterSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { uniqBy } from 'lodash';

const initialState = {
    sellerGoods: [],
};

const counterSlice = createSlice({
    name: 'sellerInfo',
    initialState,
    reducers: {
        addMygoods: (state, action) => {
            let data = [...state.sellerGoods, ...action.payload];
            let newData = uniqBy(data, 'productsId');
            return { ...state, sellerGoods: newData };
        },
        removeMyGoods: (state, action) => {
            console.log(action.payload);
            let newData = state.sellerGoods.filter(item => {
                return item.productsId !== action.payload;
            });
            return { ...state, sellerGoods: newData };
        },
    },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addMygoods, removeMyGoods } = counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;
