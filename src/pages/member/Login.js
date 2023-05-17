import React from 'react';
import { Button, TextField } from '@mui/material';
import * as S from '../../styles/common.js';
import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Login = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <S.Member>
            <h2>🥰 항해 쇼핑몰 로그인</h2>

            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="구매자" />
                <Tab label="판매자" />
            </Tabs>

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
