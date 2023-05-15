import styled from 'styled-components';

export const Member = styled.div`
    position: relative;
    display: block;
    width: 450px;
    margin: 100px auto;
    padding: 20px 30px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 25px;
    box-shadow: 10px 10px 10px #ddd;
    h2 {
        font-size: 20px;
        font-weight: bold;
    }
    .row {
        margin-top: 20px;
        &.util {
            display: flex;
            gap: 10px;
            justify-content: center;
        }
    }
    .link {
        text-decoration: underline;
        &:hover {
            color: #000;
            transition: 0.5s;
        }
    }
`;
