import React from 'react';
import { Button, TextField } from '@mui/material';
import * as S from '../../styles/common.js';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <S.Member>
            <h2>🥰 항해 쇼핑몰 로그인</h2>

            <div className="row">
                <TextField
                    label="아이디"
                    id="standard-size-small"
                    placeholder="아이디를 입력해주세요."
                    size="small"
                    variant="standard"
                    fullWidth
                />
            </div>
            <div className="row">
                <TextField
                    label="비밀번호"
                    type="password"
                    id="standard-size-small"
                    placeholder="비밀번호를 입력해주세요."
                    size="small"
                    variant="standard"
                    fullWidth
                />
            </div>
            <div className="row">
                <Button variant="contained" size="large">
                    로그인
                </Button>
            </div>
            <div className="row util">
                <Link to="/member/join" className="link">
                    회원가입
                </Link>
                <span>|</span>
                <Link to="/" className="link">
                    홈으로
                </Link>
            </div>
        </S.Member>
    );
};

export default Login;
