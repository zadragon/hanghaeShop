import React from 'react';
import * as S from '../../styles/layout';
import * as D from '../../styles/common';
import { Button } from '@mui/material';

const MyGoods = () => {
    return (
        <S.Content>
            <D.CartArea>
                <h2>내가 등록한상품</h2>
                <D.CartList widthsize="100%">
                    <ul>
                        <li>
                            <div className="imgArea">
                                <img src="https://img-cf.kurly.com/shop/data/goods/1580711722169l0.jpg" alt="" />
                            </div>
                            <div className="txtArea">
                                <strong>상품명</strong>
                                <div className="desc">📢 한정수량 진행! 옵션2번 주목! 28,000원 → 19,000원 32% OFF</div>
                            </div>
                            <div className="amountArea">
                                <p className="totalPrice">1,000,000원</p>
                                <div className="amountSetting">
                                    <strong>재고량</strong>
                                    <div>
                                        <span>1</span>
                                    </div>
                                </div>
                            </div>
                            <div className="btnArea">
                                <Button variant="contained" size="large">
                                    🗑️ 삭제하기
                                </Button>
                            </div>
                        </li>
                        <li>
                            <div className="imgArea">
                                <img src="https://img-cf.kurly.com/shop/data/goods/1580711722169l0.jpg" alt="" />
                            </div>
                            <div className="txtArea">
                                <strong>상품명</strong>
                                <div className="desc">📢 한정수량 진행! 옵션2번 주목! 28,000원 → 19,000원 32% OFF</div>
                            </div>
                            <div className="amountArea">
                                <p className="totalPrice">1,000,000원</p>
                                <div className="amountSetting">
                                    <strong>재고량</strong>
                                    <div>
                                        <span>1</span>
                                    </div>
                                </div>
                            </div>
                            <div className="btnArea">
                                <Button variant="contained" size="large">
                                    🗑️ 삭제하기
                                </Button>
                            </div>
                        </li>
                    </ul>
                </D.CartList>
            </D.CartArea>
        </S.Content>
    );
};

export default MyGoods;
