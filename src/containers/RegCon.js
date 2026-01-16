import { useDispatch, useSelector } from "react-redux"
import RegCom from "../components/RegCom"
import { useNavigate } from "react-router-dom";
import { registerThunk } from "../service/authThunk";
import { changeinput } from "../redux/inputSlice";

function RegCon(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id, password} = useSelector(state => state.input.register)

    const onChange = (e) => {
            const {name, value} = e.target
            dispatch(changeinput({ form : "register", name, value}))
        }

    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(registerThunk( {id, password}));

        if(result.payload.success) {
            navigate("/login");
        }else if(registerThunk.rejected.match(result)){
            alert(result.payload)
        }



    };


    return(<>
    <RegCom onChange={onChange} onSubmit={onSubmit} username={id} password={password} />
    </>)
}

export default RegCon