import React, { useEffect, useState } from 'react';
import * as S from '../../styles/layout';
import * as D from '../../styles/common';
import { Button, IconButton } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import MetaTag from '../../components/MetaTag';
import { goods } from '../../api/api';
import { useCookies } from 'react-cookie';

const Cart = () => {
    const [cookie] = useCookies();
    const [cart, setCart] = useState([]);
    console.log(cart);
    useEffect(() => {
        goods.viewCart(cookie.token, setCart);
    }, []);

    return (
        <>
            <MetaTag title="장바구니 :: 항해 쇼핑몰" description="이것저것 팝니다." keywords="자영업, 돈벌자, 매니" />
            <S.Content>
                <D.CartArea>
                    <h2>🧺 장바구니</h2>
                    <D.CartList>
                        <ul>
                            {cart.map(item => {
                                return (
                                    <li key={item.productsId}>
                                        <div className="imgArea">
                                            <img src={item.Product.productLink} alt="" />
                                        </div>
                                        <div className="txtArea">
                                            <strong>{item.Product.productName}</strong>
                                            <div className="desc">
                                                📢 한정수량 진행! 옵션2번 주목! 28,000원 → 19,000원 32% OFF
                                            </div>
                                        </div>
                                        <div className="amountArea">
                                            <p className="totalPrice">
                                                {item.Product.productAmount * item.Product.productPrice}원
                                            </p>
                                            <div className="amountSetting">
                                                <strong>갯수선택</strong>
                                                <div>
                                                    <IconButton color="primary">
                                                        <RemoveCircleOutlineIcon />
                                                    </IconButton>
                                                    <span>{item.Product.productAmount}</span>
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
                                );
                            })}
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
