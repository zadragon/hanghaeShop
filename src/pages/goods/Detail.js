import React, { useEffect, useState } from 'react';
import * as S from '../../styles/layout';
import * as D from '../../styles/detail';
import { Button, IconButton } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import MetaTag from '../../components/MetaTag';
import { useCookies } from 'react-cookie';
import { goods } from '../../api/api';
import { useNavigate, useParams } from 'react-router-dom';
const Detail = () => {
    //const navigate = useNavigate();
    const param = useParams();
    const [cookie] = useCookies();
    const [state, setState] = useState({ productName: '', productLink: '', productPrice: 0 });
    let [amount, setAmount] = useState(1);
    //let [total, setTotal] = useState(0);
    const navigate = useNavigate();
    console.log(param.id);
    console.log(state);

    const { productName, productLink, productPrice } = state;

    //const dispatch = useDispatch();
    //const goodsList = useSelector(state => state.buyerInfo.allgoods);

    const ctlAmount = type => {
        if (type == 'add') {
            setAmount(++amount);
        } else if (type == 'minus') {
            amount <= 1 ? setAmount(1) : setAmount(--amount);
        }
    };

    const addCartui = () => {
        const payload = {
            token: cookie.token,
            productId: param.id,
            productAmount: amount,
            productLink: productLink,
        };
        goods.addCart(payload, navigate);
    };

    useEffect(() => {
        goods.getBuyerGoodsDetail(cookie.token, param.id, setState);
    }, []);

    return (
        <>
            <MetaTag title="상품상세 :: 항해 쇼핑몰" description="이것저것 팝니다." keywords="자영업, 돈벌자, 매니" />
            <S.Content>
                <D.GoodsTitle>
                    <div className="imgArea">
                        <img src={productLink} alt="" />
                    </div>
                    <div className="purchaseArea">
                        <div className="goodsInfo">
                            <h2>{productName}</h2>
                            <div className="price">{productPrice}</div>
                            <div className="desc">📢 한정수량 진행! 옵션2번 주목! 28,000원 → 19,000원 32% OFF</div>
                        </div>
                        <div className="amountSetting">
                            <strong>갯수선택</strong>
                            <div>
                                <IconButton color="primary" onClick={() => ctlAmount('minus')}>
                                    <RemoveCircleOutlineIcon />
                                </IconButton>
                                <span>{amount}</span>
                                <IconButton color="primary" onClick={() => ctlAmount('add')}>
                                    <ControlPointIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div className="totalPrice">
                            <strong>총 상품금액 : </strong> <span className="big">1,000,000</span>원
                        </div>
                        <div className="buttonAction">
                            <Button variant="contained" size="large" onClick={addCartui}>
                                🧺 장바구니 담기
                            </Button>
                            <Button variant="contained" size="large" onClick={() => alert('구매되었습니다.')}>
                                💰 구매하기
                            </Button>
                        </div>
                    </div>
                </D.GoodsTitle>
                <D.GoodsDetail style={{ display: 'none' }}>
                    <img src="https://img-cf.kurly.com/shop/data/goodsview/20180717/gv10000027390_1.jpg" />
                    <img src="https://img-cf.kurly.com/shop/data/goodsview/20190314/gv40000044786_1.jpg" />
                    <img src="https://img-cf.kurly.com/shop/data/goodsview/20210503/gv30000179567_1.jpg" />
                    <img src="https://img-cf.kurly.com/shop/data/goodsview/20220913/gv30000179567_3.jpg" />
                    <p className="words">
                        크림치즈처럼 단단하고 크리미한 질감이 단연 돋보입니다. 꾸덕꾸덕한 제형에 풍부한 맛과 영양을 담고
                        있는 YOZM의 마카다미아 그릭요거트를 소개할게요. 국내산 원유를 3배로 농축한 뒤, 덴마크 사의
                        유산균주 4종을 넣고 60시간 이상 숙성 발효해 만들었어요. 밀도 높게 완성된 요거트에 마카다미아를
                        쏙쏙 더해 넣어, 고소한 맛과 씹는 재미까지 배가했답니다. 은은하게 도는 단맛과 부드럽게 녹는
                        풍미가 일품이니, 과일이나 시리얼 등 취향에 맞는 토핑을 더해 즐겨보세요. 스프레드처럼 빵이나
                        샐러드에 곁들여 먹어도 좋을 거예요.
                    </p>
                </D.GoodsDetail>
            </S.Content>
        </>
    );
};

export default Detail;
