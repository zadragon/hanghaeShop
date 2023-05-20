import React from 'react';
import MetaTag from '../../components/MetaTag';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const JoinDone = () => {
    return (
        <>
            <MetaTag title="회원가입 :: 항해 쇼핑몰" description="이것저것 팝니다." keywords="자영업, 돈벌자, 매니" />
            <DoneMsg>
                <h2> 감사합니다. 가입 완료되었습니다!</h2>
                <Link to="/member/login">로그인 하기</Link>
                <Link to="/">홈으로</Link>
            </DoneMsg>
        </>
    );
};

const DoneMsg = styled.div`
    text-align: center;
    h2 {
        font-size: 36px;
    }
`;

export default JoinDone;
