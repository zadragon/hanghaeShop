import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { goods } from '../../api/api';
import { useDispatch } from 'react-redux';
import { modifyGoodsAction } from '../../redux/modules/goodsSeller';

export default function FormDialog({ open, handleClose, modifyInfoData, setModifyInfo, setOpen }) {
    const dispatch = useDispatch();
    const onChangeHandler = e => {
        let { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        //typeof value !== Number && alert('숫자만입력');
        name == 'newAmount' || name == 'newPrice' ? (value = +value) : value;
        setModifyInfo({
            ...modifyInfoData, // 기존의 input 객체를 복사한 뒤
            payload: { ...modifyInfoData.payload, [name]: value }, // name 키를 가진 값을 value 로 설정
        });
    };

    const apiSetModify = () => {
        goods.modifyMygoods(modifyInfoData);
        dispatch(modifyGoodsAction(modifyInfoData));
        setOpen(false);
    };
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>수정</DialogTitle>
                <DialogContent>
                    <DialogContentText>수정할 가격과 수량을 입력해주세요.</DialogContentText>
                    <div className="row" style={{ marginTop: '20px' }}>
                        <TextField
                            label="가격"
                            id="standard-size-small1"
                            placeholder=""
                            size="small"
                            variant="standard"
                            fullWidth
                            name="newPrice"
                            type="number"
                            //value={modifyInfoData.payload.newPrice}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="row" style={{ marginTop: '20px' }}>
                        <TextField
                            label="수량"
                            id="standard-size-small2"
                            placeholder=""
                            size="small"
                            variant="standard"
                            fullWidth
                            name="newAmount"
                            type="number"
                            //value={modifyInfoData.payload.newAmount}
                            onChange={onChangeHandler}
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>닫기</Button>
                    <Button onClick={apiSetModify}>수정</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
