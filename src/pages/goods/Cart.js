import React from 'react';
import * as S from '../../styles/layout';

const Cart = () => {
    return (
        <S.Content>
            <div className="cartArea">
                <h2>장바구니</h2>
                <div>
                    <ul>
                        <li>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <strong>상품명</strong>
                                <div className="desc">📢 한정수량 진행! 옵션2번 주목! 28,000원 → 19,000원 32% OFF</div>
                            </div>
                            <div></div>
                        </li>
                    </ul>
                </div>
            </div>
        </S.Content>
    );
};

export default Cart;
