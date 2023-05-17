import React from 'react';
import { Button, TextField } from '@mui/material';
import * as S from '../../styles/common.js';
import { Link } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Join = () => {
    return (
        <S.Member>
            <h2>🥰 항해 쇼핑몰 회원가입</h2>

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
                <TextField
                    label="비밀번호 확인"
                    type="password"
                    id="standard-size-small"
                    placeholder="비밀번호를 한번더 입력해주세요."
                    size="small"
                    variant="standard"
                    fullWidth
                />
            </div>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="판매자 회원가입일 경우 체크해주세요." />
            </FormGroup>
            <div className="row">
                <Button variant="contained" size="large">
                    회원가입
                </Button>
            </div>
            <div className="row util">
                <Link to="/" className="link">
                    홈으로
                </Link>
            </div>
        </S.Member>
    );
};

export default Join;
