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
            let newData = state.sellerGoods.filter(item => {
                return item.productsId !== action.payload;
            });
            return { ...state, sellerGoods: newData };
        },
        modifyGoodsAction: (state, action) => {
            console.log(action.payload.id);
            let newData = state.sellerGoods.map(item => {
                if (item.productsId == action.payload.id) {
                    console.log('ok');
                    return {
                        ...item,
                        productAmount: action.payload.payload.newAmount,
                        productPrice: action.payload.payload.newPrice,
                    };
                } else {
                    return item;
                }
            });

            return { ...state, sellerGoods: newData };
        },
    },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addMygoods, removeMyGoods, modifyGoodsAction } = counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;
