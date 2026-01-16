import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import DetailCom from "../components/DetailCom";
import { useDispatch, useSelector } from "react-redux";
import { deleteMemberThunk, getMemberDetailThunk } from "../service/authThunk";
import { useEffect } from "react";
import memberDataSlice from "../redux/memberDataSlice";
import { logout } from "../redux/authSlice";


function DetailCon(){
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {clearMember} = memberDataSlice.actions;
    const {username} = useSelector(state => state.auth)

    const {isLoggedIn} = useSelector(state => state.auth);
    const {member, loading, error} = useSelector(state => state.memberData);

    useEffect( () => {
        if(!isLoggedIn) {
            alert("로그인이 필요한 서비스입니다.");
            navigate("/login")
            return;
        }

        dispatch(getMemberDetailThunk(id));
        return () => {dispatch(clearMember()); };
    }, [id, isLoggedIn, navigate, dispatch]);

    if (loading) return <div>정보를 불러오는 중</div>
    if (error) return <div>{error}</div>;

    const onDelete = async () => {
            const result = await dispatch(deleteMemberThunk(id));
        if (deleteMemberThunk.fulfilled.match(result)) {
                alert("삭제되었습니다.");
            if(id === username){
                dispatch(logout())
                navigate("/login")
            } else{
                navigate("/list"); 
            }    
        }
    }

    

    return(<>
    <DetailCom member={member} loading={loading} error={error} onBack={() => navigate(-1)} onDelete={onDelete} />
   </>)
}

export default DetailCon;