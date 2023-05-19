import React from 'react';
import * as S from '../../styles/layout';
import * as D from '../../styles/common';
import { Button, TextField } from '@mui/material';

const AddGoods = () => {
    return (
        <>
            <S.Content>
                <D.AddGoodsArea>
                    <h2>상품 등록하기</h2>
                    <div className="row">
                        <TextField
                            label="상품명"
                            id="standard-size-small"
                            placeholder=""
                            size="small"
                            variant="standard"
                            fullWidth
                        />
                    </div>
                    <div className="row">
                        <TextField
                            label="가격"
                            id="standard-size-small"
                            placeholder=""
                            size="small"
                            variant="standard"
                            fullWidth
                            type="number"
                        />
                    </div>
                    <div className="row">
                        <TextField
                            label="수량"
                            id="standard-size-small"
                            placeholder=""
                            size="small"
                            variant="standard"
                            fullWidth
                            type="number"
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
                        />
                    </div>
                    <div className="row">
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
                    </div>
                    <Button variant="contained" size="large" className="btnSubmit">
                        상품 등록하기
                    </Button>
                </D.AddGoodsArea>
            </S.Content>
        </>
    );
};

export default AddGoods;
