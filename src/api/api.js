import axios from 'axios';
import { addUserInfo } from '../redux/modules/member';

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
        console.log(payload);
        axios
            .post(`${process.env.REACT_APP_HOST}/api/login`, payload)
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    setCookies('token', response.data.token);
                    dispatch(addUserInfo({ userName: response.data.userName, userType: response.data.userType }));
                    navigate('/');
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
    addGoods: payload => {
        console.log(payload);
        axios
            .post(`${process.env.REACT_APP_HOST}/api/seller/upload`, payload)
            .then(response => {
                if (response.status === 200) {
                    alert(response.data.message);
                }
            })
            .catch(error => {
                console.log(error);
                if (error.response.status === 401) {
                    alert('이미 가입된 아이디입니다.');
                }
            });
    },
    getMyGoods: token => {
        axios
            .get(`${process.env.REACT_APP_HOST}/api/seller`, {
                headers: {
                    Authorization: token,
                },
            })

            .then(function (response) {
                // 성공 핸들링
                console.log(response);
            })
            .catch(function (error) {
                // 에러 핸들링
                console.log(error);
            })
            .finally(function () {
                // 항상 실행되는 영역
            });
    },
};
