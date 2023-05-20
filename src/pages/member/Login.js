import React, { useEffect, useState } from 'react';
import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import * as S from '../../styles/common.js';
import { Link, useNavigate } from 'react-router-dom';
import MetaTag from '../../components/MetaTag.js';
import { member } from '../../api/api.js';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [inputs, setInputs] = useState({
        userName: '',
        userType: 'buyer',
        password: '',
    });

    const navigate = useNavigate();
    const [cookies = null, setCookies] = useCookies();
    const dispatch = useDispatch();

    useEffect(() => {}, [cookies]);

    /* 회원 타입 선택 */
    const onCheckHandler = e => {
        const { checked, name } = e.target;
        setInputs({
            ...inputs,
            [name]: checked ? 'seller' : 'buyer',
        });
    };

    /* 아이디 비밀번호 setInput */
    const onChangeHandler = e => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value, // name 키를 가진 값을 value 로 설정
        });
    };

    /* 로그인 버튼 */
    const onSubmit = e => {
        e.preventDefault(); // 버튼 기본동작 막음
        if (inputs.userName == '') {
            alert('아이디를 입력해주세요.');
            return;
        } else if (inputs.password == '') {
            alert('비밀번호를 입력해주세요.');
            return;
        }
        member.memberLogin(inputs, setCookies, navigate, dispatch);
    };

    return (
        <>
            <MetaTag title="로그인 :: 항해 쇼핑몰" description="이것저것 팝니다." keywords="자영업, 돈벌자, 매니" />
            <S.Member>
                <h2>🥰 항해 쇼핑몰 로그인</h2>

                <form onSubmit={onSubmit}>
                    <div className="row">
                        <TextField
                            label="아이디"
                            id="standard-size-small"
                            placeholder="아이디를 입력해주세요."
                            size="small"
                            variant="standard"
                            fullWidth
                            name="userName"
                            value={inputs.userName}
                            onChange={onChangeHandler}
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
                            name="password"
                            value={inputs.password}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox />}
                            name="userType"
                            onChange={onCheckHandler}
                            checked={inputs.userType == 'buyer' ? false : true}
                            label="판매자회원으로 로그인 하실 경우 체크해주세요."
                        />
                    </FormGroup>
                    <div className="row">
                        <Button variant="contained" size="large" type="submit">
                            로그인
                        </Button>
                    </div>
                </form>
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
        </>
    );
};

export default Login;
