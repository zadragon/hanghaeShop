import styled from 'styled-components';

export const AddGoodsArea = styled.div`
    width: 500px;
    margin: 40px auto 0;
    padding: 20px 30px 20px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 25px;
    box-shadow: 10px 10px 10px #ddd;
    h2 {
        font-size: 36px;
        font-weight: bold;
    }
    .row {
        margin-top: 20px;
    }
    .btnSubmit {
        margin-top: 20px;
    }
`;
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

export const CartArea = styled.div`
    h2 {
        font-size: 36px;

        padding: 20px 0 15px;
        border-bottom: 1px solid #ddd;
    }
`;
export const CartList = styled.div`
    display: flex;
    justify-content: space-between;
    ul {
        width: ${props => props.widthsize || '75%'};
        li {
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #ddd;
            padding: 15px 0;
            .imgArea {
                overflow: hidden;
                width: 200px;
                height: 200px;
                img {
                    width: 100%;
                    height: auto;
                }
            }
            .txtArea {
                width: 250px;
                strong {
                    font-size: 20px;
                }
            }
            .amountArea {
                width: 100px;
                text-align: center;
                .totalPrice {
                    font-size: 17px;
                }
            }
        }
    }
    .totalArea {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 20%;
        height: 173px;
        margin-top: 15px;
        border: 1px solid #ddd;
        padding: 15px;
        text-align: center;
        table {
            width: 100%;
        }
    }
`;
