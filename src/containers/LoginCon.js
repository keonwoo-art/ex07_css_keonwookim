import { useDispatch, useSelector } from "react-redux"
import HeaderCom from "../components/common/HeaderCom"
import LoginCom from "../components/LoginCom"
import inputSlice, { changeinput } from "../redux/inputSlice"
import { loginThunk } from "../service/authThunk"
import { useNavigate } from "react-router-dom"


const LoginCon = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id, password} = useSelector(state=>state.input.login)
    
    const onChange = (e) => {
        const {name, value} = e.target
        dispatch(changeinput({ form : "login", name, value}))
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        const loginData = {username : id, password : password };
        console.log("지금 리덕스에 저장된 값", loginData)
        const resultAction = await dispatch(loginThunk({ id, password }));
        if (resultAction.payload && resultAction.payload.result === 0) {
        navigate("/");
    }else{
        alert("다시 입력해 주세요.");
    }
    }


    return(<>
      
        <LoginCom  onSubmit={onSubmit} onChange={onChange} username={id} password={password}/>
    </>)
}

export default LoginCon