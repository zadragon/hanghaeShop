import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from 'styled-components';

export default function ActionAreaCard() {
    return (
        <>
            <ProducList>
                {itemlist.map((item, idx) => (
                    <li key={idx}>
                        <Card sx={{ width: '100%' }}>
                            <CardActionArea>
                                <CardMedia component="img" height="140" image={item.imgUrl} alt="green iguana" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.productName}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <div>{item.price}</div>
                                        {item.desc}
                                        <button>장바구니담기</button>
                                    </Typography>
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
