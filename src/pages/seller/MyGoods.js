import React, { useEffect } from 'react';
import * as S from '../../styles/layout';
import * as D from '../../styles/common';
import { Button } from '@mui/material';
import MetaTag from '../../components/MetaTag';
import { goods } from '../../api/api';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';

const MyGoods = () => {
    const [cookies] = useCookies();

    const dispatch = useDispatch();
    const myList = useSelector(state => state.sellerInfo.sellerGoods);
    console.log(myList.length);

    useEffect(() => {
        goods.getMyGoods(cookies.token, dispatch);
    }, []);

    const removeGoods = id => {
        goods.removeGoods(cookies.token, id, dispatch);
    };

    return (
        <>
            <MetaTag
                title="내가 등록한 상품 :: 항해 쇼핑몰"
                description="이것저것 팝니다."
                keywords="자영업, 돈벌자, 매니"
            />
            <S.Content>
                <D.CartArea>
                    <h2>내가 등록한상품</h2>
                    <D.CartList widthsize="100%">
                        <ul>
                            {myList.length === 0 && (
                                <p
                                    style={{
                                        fontSize: '30px',
                                        padding: '100px 0',
                                        margin: '0 auto',
                                        textAlign: 'center',
                                    }}
                                >
                                    등록된 상품이 없습니다.
                                </p>
                            )}
                            {myList?.map((item, idx) => {
                                return (
                                    <li key={idx}>
                                        <div className="imgArea">
                                            <img src={item.productLink} alt="" />
                                        </div>
                                        <div className="txtArea">
                                            <strong>{item.productName}</strong>
                                            <div className="desc">
                                                📢 한정수량 진행! 옵션2번 주목! 28,000원 → 19,000원 32% OFF
                                            </div>
                                        </div>
                                        <div className="amountArea">
                                            <p className="totalPrice">{item.productPrice}</p>
                                            <div className="amountSetting">
                                                <strong>재고량</strong>
                                                <div>
                                                    <span>{item.productAmount}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btnArea">
                                            <Button
                                                variant="contained"
                                                size="large"
                                                onClick={() => removeGoods(item.productsId)}
                                            >
                                                🗑️ 삭제하기
                                            </Button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </D.CartList>
                </D.CartArea>
            </S.Content>
        </>
    );
};

export default MyGoods;
