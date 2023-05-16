import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export default function ActionAreaCard() {
    return (
        <>
            <ProducList>
                {itemlist.map((item, idx) => (
                    <li key={idx}>
                        <Card sx={{ width: '100%' }}>
                            <CardActionArea component="div">
                                <Link to="/goods/detail/1">
                                    <CardMedia component="img" height="140" image={item.imgUrl} alt="green iguana" />
                                </Link>
                                <CardContent>
                                    <Link to="/goods/detail/1">
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.productName}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" component="div">
                                            <div>{item.price}</div>
                                            {item.desc}
                                        </Typography>
                                    </Link>
                                    <button>장바구니 담기</button>
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

const itemlist = [
    {
        productName: '상품명',
        price: '100,000원',
        imgUrl: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
        desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents Antarctica',
    },
    {
        productName: '상품명',
        price: '100,000원',
        imgUrl: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
        desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents Antarctica',
    },
    {
        productName: '상품명',
        price: '100,000원',
        imgUrl: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
        desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents Antarctica',
    },
    {
        productName: '상품명',
        price: '100,000원',
        imgUrl: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
        desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents Antarctica',
    },
    {
        productName: '상품명',
        price: '100,000원',
        imgUrl: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
        desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents Antarctica',
    },
];
