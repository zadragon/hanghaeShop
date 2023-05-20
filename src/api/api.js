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
                    console.log(response.data.token);
                    setCookies('token', response.data.token);
                    dispatch(addUserInfo({ userName: response.data.userName, userType: response.data.userType }));
                    navigate('/');
                }
            })
            .catch(error => {
                console.log(error);
                if (error.response.status === 401) {
                    console.log(error);
                }
            });
    },
};
