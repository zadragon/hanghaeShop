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
    const [totalPrice, setTotalPrice] = useState(0);
    console.log(cart);
    useEffect(() => {
        goods.viewCart(cookie.token, setCart);
    }, []);

    useEffect(() => {
        setCart(cart);
        let totalval = cart.reduce((acc, cur) => {
            return (acc += cur.Product.productPrice * cur.productAmount);
        }, 0);
        console.log(totalval);
        setTotalPrice(totalval);
    }, [cart]);

    const removeCartEvent = id => {
        console.log(id);
        goods.removeCartGoods(cookie.token, id, cart, setCart);
    };

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
                                            <strong>
                                                {item.Product.productName} : {item.Product.productPrice}원
                                            </strong>
                                            <div className="desc">📢 한정수량 진행! 옵션2번 주목! 32% OFF</div>
                                        </div>
                                        <div className="amountArea">
                                            <p className="totalPrice">
                                                총 금액 : {item.productAmount * item.Product.productPrice}원
                                            </p>
                                            <div className="amountSetting">
                                                <strong>갯수선택</strong>
                                                <div>
                                                    <IconButton color="primary">
                                                        <RemoveCircleOutlineIcon />
                                                    </IconButton>
                                                    <span>{item.productAmount}</span>
                                                    <IconButton color="primary">
                                                        <ControlPointIcon />
                                                    </IconButton>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btnArea">
                                            <Button
                                                variant="contained"
                                                size="large"
                                                onClick={() => removeCartEvent(item.cartsId)}
                                            >
                                                🗑️ 삭제하기
                                            </Button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="totalArea">
                            <strong>전체상품 : {cart.length}개</strong>
                            <table>
                                <tbody>
                                    <tr>
                                        <th scope="row">주문금액</th>
                                        <td>{totalPrice}원</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Button variant="contained" size="large" onClick={() => alert('구매완료!')}>
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
