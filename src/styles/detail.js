import styled from 'styled-components';

export const GoodsTitle = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    .imgArea {
        width: 40%;
        img {
            width: 100%;
        }
    }
    .purchaseArea {
        width: 55%;
        h2 {
            font-size: 36px;
        }
        .price {
            font-size: 20px;
        }
        .amountSetting {
            margin-top: 20px;
            display: flex;
            border: 1px solid #ddd;
            padding: 10px 20px;
            border-radius: 10px;
            background-color: #ecf0f1;
            justify-content: space-between;
            align-items: center;
            button {
                cursor: pointer !important;
            }
        }
        .buttonAction {
            margin-top: 20px;
            display: flex;
            gap: 10px;
        }
    }
`;

export const GoodsDetail = styled.div`
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #ddd;
`;
