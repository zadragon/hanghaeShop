import React, { useEffect } from 'react';
import * as S from '../../styles/layout';
import * as D from '../../styles/common';
import { Button, IconButton } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import MetaTag from '../../components/MetaTag';
import { goods } from '../../api/api';
import { useCookies } from 'react-cookie';

const Cart = () => {
    const cookie = useCookies();
    console.log(cookie.token);
    useEffect(() => {
        goods.viewCart(cookie.token);
    }, []);

    return (
        <>
            <MetaTag title="장바구니 :: 항해 쇼핑몰" description="이것저것 팝니다." keywords="자영업, 돈벌자, 매니" />
            <S.Content>
                <D.CartArea>
                    <h2>🧺 장바구니</h2>
                    <D.CartList>
                        <ul>
                            <li>
                                <div className="imgArea">
                                    <img src="https://img-cf.kurly.com/shop/data/goods/1580711722169l0.jpg" alt="" />
                                </div>
                                <div className="txtArea">
                                    <strong>상품명</strong>
                                    <div className="desc">
                                        📢 한정수량 진행! 옵션2번 주목! 28,000원 → 19,000원 32% OFF
                                    </div>
                                </div>
                                <div className="amountArea">
                                    <p className="totalPrice">1,000,000원</p>
                                    <div className="amountSetting">
                                        <strong>갯수선택</strong>
                                        <div>
                                            <IconButton color="primary">
                                                <RemoveCircleOutlineIcon />
                                            </IconButton>
                                            <span>1</span>
                                            <IconButton color="primary">
                                                <ControlPointIcon />
                                            </IconButton>
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
                                    <div className="desc">
                                        📢 한정수량 진행! 옵션2번 주목! 28,000원 → 19,000원 32% OFF
                                    </div>
                                </div>
                                <div className="amountArea">
                                    <p className="totalPrice">1,000,000원</p>
                                    <div className="amountSetting">
                                        <strong>갯수선택</strong>
                                        <div>
                                            <IconButton color="primary">
                                                <RemoveCircleOutlineIcon />
                                            </IconButton>
                                            <span>1</span>
                                            <IconButton color="primary">
                                                <ControlPointIcon />
                                            </IconButton>
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
                        <div className="totalArea">
                            <strong>전체상품 : 2개</strong>
                            <table>
                                <tbody>
                                    <tr>
                                        <th scope="row">주문금액</th>
                                        <td>1,000,000원</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Button variant="contained" size="large">
                                💳 주문하기
                            </Button>
                        </div>
                    </D.CartList>
                </D.CartArea>
            </S.Content>
        </>
    );
};

export default Cart;
