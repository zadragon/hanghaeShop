import React, { useEffect } from 'react';
import * as S from '../../styles/layout';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper';
import TitlebarImageList from '../../components/goods/List.js';
import MetaTag from '../../components/MetaTag';
import { goods } from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';

const GoodsList = () => {
    //const navigate = useNavigate();
    const [cookie] = useCookies();
    const dispatch = useDispatch();
    const goodsList = useSelector(state => state.buyerInfo.allgoods);
    console.log(goodsList);
    useEffect(() => {
        goods.getBuyerGoods(cookie.token, dispatch);
    }, []);
    return (
        <>
            <MetaTag title="메인 :: 항해 쇼핑몰" description="이것저것 팝니다." keywords="자영업, 돈벌자, 매니" />
            <div className="mainVisual">
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img
                            src="https://image.mustit.co.kr/lib/upload/home/main_banner/9d0e02399c88e57124d2d33260c85702.jpg/_dims_/quality/80"
                            alt="빅배너"
                            className="cover_img"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://image.mustit.co.kr/lib/upload/home/main_banner/f92286f7f3358c55d3388f0cd3c5a614.jpg/_dims_/quality/80"
                            alt="빅배너"
                            className="cover_img"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://image.mustit.co.kr/lib/upload/home/main_banner/4804ef176c6d5bbbc4f105285d7bac5e.jpg/_dims_/quality/80"
                            alt="빅배너"
                            className="cover_img"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <S.Content>
                <TitlebarImageList goodsList={goodsList} />
            </S.Content>
        </>
    );
};

export default GoodsList;
