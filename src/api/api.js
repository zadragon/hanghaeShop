import axios from 'axios';
import { addUserInfo } from '../redux/modules/member';
import { addMygoods } from '../redux/modules/goodsSeller';
import { addBuyerGoods } from '../redux/modules/goodsBuyer';

export const member = {
    memberJoin: (payload, navigate) => {
        console.log(payload);
        axios
            .post(`${process.env.REACT_APP_HOST}/api/join`, payload)
            .then(response => {
                if (response.status === 200) {
                    alert(response.data.message);
                    navigate('/member/joinDone');
                }
            })
            .catch(error => {
                console.log(error);
                if (error.response.status === 401) {
                    alert('이미 가입된 아이디입니다.');
                }
            });
    },
    memberLogin: (payload, setCookies, navigate, dispatch) => {
        axios
            .post(`${process.env.REACT_APP_HOST}/api/login`, payload)
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    setCookies('token', response.data.token);
                    if (response.data.userType == 'buyer') {
                        dispatch(addUserInfo({ userName: response.data.userName, userType: response.data.userType }));
                        navigate('/');
                    } else if (response.data.userType == 'seller') {
                        navigate('/seller/myGoods');
                    }
                }
            })
            .catch(error => {
                console.log(error);
                if (error.response.status === 401) {
                    console.log(error);
                } else if (error.response.status === 412) {
                    alert(error.response.data.errorMessage);
                }
            });
    },
};

export const goods = {
    getBuyerGoods: (token, dispatch) => {
        axios.post(`${process.env.REACT_APP_HOST}/api/buyer`, { token }).then(response => {
            console.log(response);
            if (response.status === 200) {
                console.log(response.data.AllProducts);
                dispatch(addBuyerGoods(response.data.AllProducts));
            }
        });
    },
    getBuyerGoodsDetail: (token, id, setState) => {
        axios.post(`${process.env.REACT_APP_HOST}/api/buyer/${id}/detail`, { token, productId: id }).then(response => {
            console.log(response);
            if (response.status === 200) {
                console.log(response);
                setState(response.data.ProductDetail);
                //dispatch(addBuyerGoods(response.data.AllProducts));
            }
        });
    },
    addCart: (payload, navigate) => {
        axios
            .post(`${process.env.REACT_APP_HOST}/api/buyer/${payload.productId}/cart`, payload)
            .then(response => {
                if (response.status === 200) {
                    alert(response.data.message);
                    navigate('/goods/cart');
                }
            })
            .catch(error => {
                console.log(error);
                alert(error.reponse.date.errorMessage);
            });
    },
    viewCart: token => {
        axios
            .post(`${process.env.REACT_APP_HOST}/api/buyer/cart`, token)
            .then(response => {
                if (response.status === 200) {
                    console.log(response);
                    //alert(response.data.message);
                }
            })
            .catch(error => {
                console.log(error);
                alert(error.reponse.date.errorMessage);
            });
    },
    addGoods: (payload, navigate) => {
        console.log(payload);
        axios
            .post(`${process.env.REACT_APP_HOST}/api/seller/upload`, payload)
            .then(response => {
                if (response.status === 200) {
                    alert(response.data.message);
                    navigate('/seller/myGoods');
                }
            })
            .catch(error => {
                console.log(error);
                alert(error.reponse.date.errorMessage);
                // if (error.response.status === 401) {
                //     alert('상품 등록 실패');
                // }
            });
    },
    getMyGoods: (token, dispatch) => {
        console.log('token', typeof token);
        axios
            .post(`${process.env.REACT_APP_HOST}/api/seller`, { token })
            .then(function (response) {
                // 성공 핸들링
                console.log(response.data.userProducts);
                dispatch(addMygoods(response.data.userProducts));
            })
            .catch(function (error) {
                // 에러 핸들링
                console.log(error);
                //console.log({token:token});
                //alert(error.response.data.errorMessage);
            })
            .finally(function () {
                // 항상 실행되는 영역
            });
    },
};
