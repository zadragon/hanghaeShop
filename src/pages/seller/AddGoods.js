import React, { useState } from 'react';
import * as S from '../../styles/layout';
import * as D from '../../styles/common';
import { Button, TextField } from '@mui/material';
import { useCookies } from 'react-cookie';
import { goods } from '../../api/api';

const AddGoods = () => {
    const [cookies] = useCookies(); //eslint-disable-line no-unused-vars
    const [inputs, setInputs] = useState({
        token: '',
        productName: '',
        productAmount: 0,
        productLink: '',
    });
    const onChangeHandler = e => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value, // name 키를 가진 값을 value 로 설정
        });
        console.log(inputs);
    };

    const onSubmit = e => {
        e.preventDefault(); // 버튼 기본동작 막음
        const payload = { ...inputs, token: cookies.token };
        goods.addGoods(payload);
        setInputs({
            token: '',
            productName: '',
            productAmount: 0,
            productLink: '',
        });
    };

    return (
        <>
            <S.Content>
                <D.AddGoodsArea>
                    <h2>상품 등록하기</h2>
                    <form onSubmit={onSubmit}>
                        <div className="row">
                            <TextField
                                label="상품명"
                                id="standard-size-small"
                                placeholder=""
                                size="small"
                                variant="standard"
                                fullWidth
                                name="productName"
                                value={inputs.productName}
                                onChange={onChangeHandler}
                            />
                        </div>
                        {/* <div className="row">
                        <TextField
                            label="가격"
                            id="standard-size-small"
                            placeholder=""
                            size="small"
                            variant="standard"
                            fullWidth
                            name="productPrice"
                            type="number"
                            value={inputs.productPrice}
                            onChange={onChangeHandler}
                        />
                    </div> */}
                        <div className="row">
                            <TextField
                                label="수량"
                                id="standard-size-small"
                                placeholder=""
                                size="small"
                                variant="standard"
                                fullWidth
                                name="productAmount"
                                type="number"
                                value={inputs.productAmount}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className="row">
                            <TextField
                                label="상품썸네일"
                                id="standard-size-small"
                                placeholder=""
                                size="small"
                                variant="standard"
                                fullWidth
                                name="productLink"
                                type="text"
                                value={inputs.productLink}
                                onChange={onChangeHandler}
                            />
                        </div>
                        {/* <div className="row">
                        <TextField
                            label="상품상세이미지"
                            id="standard-size-small"
                            placeholder=""
                            size="small"
                            variant="standard"
                            fullWidth
                        />
                    </div>
                    <div className="row">
                        <TextField
                            label="설명"
                            id="standard-size-small"
                            placeholder=""
                            size="small"
                            variant="standard"
                            multiline
                            rows={4}
                            fullWidth
                        />
                    </div> */}
                        <Button variant="contained" size="large" className="btnSubmit" type="submit">
                            상품 등록하기
                        </Button>
                    </form>
                </D.AddGoodsArea>
            </S.Content>
        </>
    );
};

export default AddGoods;
