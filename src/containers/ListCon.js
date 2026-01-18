import { useDispatch, useSelector } from "react-redux";
import ListCom from "../components/ListCom"
import { getAllMembersThunk } from "../service/authThunk";
import { useEffect } from "react";

function ListCon(){
    const dispatch = useDispatch();
    const {members, loading, error} = useSelector(state => state.memberData);

    useEffect(() => {
        dispatch(getAllMembersThunk());
    }, [dispatch])

    return(<>
    <ListCom members={members} loading={loading} error={error} />
    </>)
}

export default ListCon;