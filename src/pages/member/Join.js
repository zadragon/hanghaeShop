import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import * as S from '../../styles/common.js';
import { Link, useNavigate } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MetaTag from '../../components/MetaTag.js';
import { member } from '../../api/api.js';

const Join = () => {
    const [inputs, setInputs] = useState({
        payload: {
            userName: '',
            userType: 'buyer',
            password: '',
        },
        pwValid: '',
    });
    const navigate = useNavigate();

    const joinForm = e => {
        e.preventDefault(); // 버튼 기본동작 막음

        const { userName, userType, password } = inputs.payload;
        const { pwValid } = inputs;
        if (userName == '') {
            alert('아이디를 입력해주세요.');
            return;
        } else if (password !== pwValid) {
            alert('비밀번호를 확인해주세요.');
            return;
        }

        const askMsg = confirm(
            `가입하시려는 회원 유형이 ${userType == 'seller' ? '판매자 회원' : '일반 회원'} 맞습니까?`
        );

        askMsg && member.memberJoin(inputs.payload, navigate);
        setInputs({
            payload: {
                userName: '',
                userType: 'buyer',
                password: '',
            },
            pwValid: '',
        }); //인풋 초기화
    };

    const onChangeHandler = e => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            payload: {
                ...inputs.payload,
                [name]: value, // name 키를 가진 값을 value 로 설정
            },
        });
    };

    const onCheckHandler = e => {
        const { checked, name } = e.target;
        setInputs({
            ...inputs,
            payload: {
                ...inputs.payload,
                [name]: checked ? 'seller' : 'buyer',
            },
        });
    };

    const onPwValidCheck = e => {
        setInputs({
            ...inputs,
            pwValid: e.target.value,
        });
    };

    return (
        <>
            <MetaTag title="회원가입 :: 항해 쇼핑몰" description="이것저것 팝니다." keywords="자영업, 돈벌자, 매니" />
            <S.Member>
                <h2>🥰 항해 쇼핑몰 회원가입</h2>
                <form onSubmit={joinForm}>
                    <div className="row">
                        <TextField
                            label="아이디"
                            id="userId"
                            placeholder="아이디를 입력해주세요."
                            size="small"
                            variant="standard"
                            fullWidth
                            name="userName"
                            value={inputs.payload.userName}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="row">
                        <TextField
                            label="비밀번호"
                            type="password"
                            id="userPw"
                            placeholder="비밀번호를 입력해주세요."
                            size="small"
                            variant="standard"
                            fullWidth
                            name="password"
                            autoComplete="off"
                            value={inputs.payload.password}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="row">
                        <TextField
                            label="비밀번호 확인"
                            type="password"
                            id="userPwChk"
                            placeholder="비밀번호를 한번더 입력해주세요."
                            size="small"
                            variant="standard"
                            fullWidth
                            name="passwordConfirm"
                            autoComplete="off"
                            value={inputs.pwValid}
                            onChange={onPwValidCheck}
                        />
                    </div>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox />}
                            name="userType"
                            onChange={onCheckHandler}
                            checked={inputs.payload.userType == 'buyer' ? false : true}
                            label="판매자 회원가입일 경우 체크해주세요."
                        />
                    </FormGroup>
                    <div className="row">
                        <Button variant="contained" size="large" type="submit">
                            회원가입
                        </Button>
                    </div>
                </form>
                <div className="row util">
                    <Link to="/" className="link">
                        홈으로
                    </Link>
                </div>
            </S.Member>
        </>
    );
};

export default Join;
