import React from 'react';
import * as S from '../../styles/layout';

const MyGoods = () => {
    return (
        <S.Content>
            <div className="cartArea">
                <h2>내가 등록한 상품</h2>
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

export default MyGoods;
