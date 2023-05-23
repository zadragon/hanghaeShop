import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { goods } from '../../api/api';
import { useCookies } from 'react-cookie';

export default function ActionAreaCard(goodsList) {
    const [cookie] = useCookies();
    const navigate = useNavigate();

    const addCartui = (productsId, productAmount, productPrice) => {
        const payload = {
            token: cookie.token,
            productId: productsId,
            productAmount: productAmount,
            productPrice: productPrice,
        };
        goods.addCart(payload, navigate);
    };
    return (
        <>
            <ProducList>
                {goodsList.goodsList.map(item => (
                    <li key={item.productsId}>
                        <Card sx={{ width: '100%' }}>
                            <CardActionArea component="div">
                                <Link to={`/goods/detail/${item.productsId}`}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={item.productLink}
                                        alt="green iguana"
                                    />
                                </Link>
                                <CardContent>
                                    <Link to={`/goods/detail/${item.productsId}`}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.productName}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" component="div">
                                            <div>{item.productPrice} 원</div>
                                            {/* {item.desc} */}
                                        </Typography>
                                    </Link>
                                    <button
                                        onClick={() =>
                                            addCartui(item.productsId, item.productAmount, item.productPrice)
                                        }
                                    >
                                        장바구니 담기
                                    </button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </li>
                ))}
            </ProducList>
        </>
    );
}

const ProducList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
    li {
        width: calc(50% - 5px);
    }
    @media screen and (min-width: 700px) {
        li {
            width: calc(25% - 10px);
        }
    }
`;
