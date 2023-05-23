import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Button from '@mui/material/Button';
import * as S from '../styles/layout';
import { Fingerprint } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { logout } from '../redux/modules/member';

const Layout = () => {
    const [cookies, , removeCookie] = useCookies(); //eslint-disable-line no-unused-vars
    const userInfo = useSelector(state => state.userInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogout = () => {
        removeCookie('token', { path: '/' }, 1000);
        dispatch(logout());
        navigate('/member/login');
    };
    const user = useSelector(state => state.userInfo);

    return (
        <div id="container">
            <S.Header>
                <div className="inner">
                    {cookies.token && (
                        <div className="userInfo">
                            <strong>{user.userName}</strong>님 환영합니다.
                        </div>
                    )}
                    <h1>
                        <Link to="/">
                            <LocalOfferIcon style={{ color: '#3498db', fontSize: '34px', verticalAlign: 'middle' }} />{' '}
                            항해 쇼핑몰
                        </Link>
                    </h1>
                    {/* 임시 gnb메뉴 */}
                    <div className="util">
                        <ul>
                            {userInfo.userType == 'seller' && (
                                <li>
                                    <Link to="/seller/addGoods">상품등록</Link>
                                </li>
                            )}
                            <li>
                                <Link to="/goods/cart">장바구니</Link>
                            </li>
                            <li>
                                {cookies.token ? (
                                    <Button
                                        variant="contained"
                                        startIcon={<Fingerprint />}
                                        color="primary"
                                        size="small"
                                        onClick={onLogout}
                                    >
                                        로그아웃
                                    </Button>
                                ) : (
                                    <Link to="/member/login">
                                        <Button
                                            variant="contained"
                                            startIcon={<Fingerprint />}
                                            color="primary"
                                            size="small"
                                        >
                                            로그인
                                        </Button>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </S.Header>

            {/* 공통영역 밑에 들어가는 콘텐츠 */}
            <div id="content">
                <Outlet />
            </div>
            <S.Sitemap>
                <li>
                    <Link to="/">상품목록</Link>
                </li>
                <li>
                    <Link to="/goods/detail/1">상품상세</Link>
                </li>
                <li>
                    <Link to="/goods/cart">장바구니</Link>
                </li>
                <li>
                    <Link to="/member/login">로그인</Link>
                </li>
                <li>
                    <Link to="/member/join">회원가입</Link>
                </li>
                <li>
                    <Link to="/seller/addGoods">상품등록</Link>
                </li>
                <li>
                    <Link to="/seller/myGoods">내가등록한상품</Link>
                </li>
            </S.Sitemap>
        </div>
    );
};

export default Layout;
