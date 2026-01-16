import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const ListTable = styled.table`
    width: 800px; margin: 50px auto;
    border-collapse: collapse;
    text-align: center;
    th, td { border: 1px solid #ddd; padding: 10px; }
    th { background-color: #f4f4f4; }
`;

function ListCom({members, loading, error}){
    const navigate = useNavigate();
    if (loading) return <h2 style={{textAlign: 'center'}}>데이터를 불러오는 중입니다...</h2>;
    if (error) return <h2 style={{textAlign: 'center', color: 'red'}}>{error}</h2>;
    
    return(
       <div>
            <h1 style={{textAlign: 'center', marginTop: '150px', color: 'red'}}>회원 전체 목록</h1>
            <ListTable>
                <thead>
                    <tr>
                        <th>아이디</th>
                        <th>비밀번호</th>
                        <th>ROLE</th>
                    </tr>
                </thead>
                <tbody>
                    {members.length > 0 ? (
                        members.map((member) => (
                            <tr key={member.id}>
                                <td>
                                    <Link to ={ `/detail/${member.id}`}>
                                    {member.id}</Link>
                                </td>
                                <td>{member.password}</td>
                                <td>{member.role}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">가입된 회원이 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </ListTable>
            <button><Link to = "/">HOME</Link></button>
        </div>
    )
}
export default ListCom;