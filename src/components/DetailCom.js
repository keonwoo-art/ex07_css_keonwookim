import styled from "styled-components";

const DetailWrapper = styled.div`
    width: 500px; margin: 150px auto;
    padding: 30px; border: 1px solid #eee;
    box-shadow: 0 0 10px rgba(0,0,0,0.05);
    text-align: center;
`;

const InfoBox = styled.div`
    text-align: left; margin: 20px 0;
    line-height: 2;
    border-top: 2px solid #333; padding-top: 15px;
`;

const BackBtn = styled.button`
    padding: 10px 20px; cursor: pointer;
    background: #333; color: white; border: none;
    &:hover { background: #555; }
`;

const DeleteBtn = styled.button`
    padding: 10px 20px; cursor: pointer;
    background: #ff4d4d; color: white; border: none;
    margin-left: 10px;
    &:hover { background: #ff3333; }
`;

const UpdateBtn = styled.button`
    padding: 10px 20px; cursor: pointer;
    background: #4caf50; color: white; border: none;
    margin-left: 10px;
    &:hover { background: #45a049; }
`;


function DetailCom({member, loading, error, onBack, onDelete, editData, onChange, onUpdate} ){
    if (loading) return <h2 style={{ textAlign: "center", marginTop: "150px" }}>로딩 중...</h2>;
    if (error) return <h2 style={{ textAlign: "center", marginTop: "150px", color: "red" }}>{error}</h2>;

    return (
        <DetailWrapper>
           <h1>회원 정보 수정</h1>
            {member && editData ? (
                <>
                    <InfoBox>
                        <p><strong>아이디:</strong> {member.id} (수정 불가)</p>
                        <p><strong>비밀번호:</strong> 
                            <input name="password" value={editData.password || ""} onChange={onChange} />
                        </p>
                        <p><strong>권한:</strong> 
                            <select name="role" value={editData.role} onChange={onChange}>
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </p>
                    </InfoBox>
                    <BackBtn onClick={onBack}>목록으로 돌아가기</BackBtn>
                    <UpdateBtn onClick={onUpdate}>수정 완료</UpdateBtn>
                    <DeleteBtn onClick={onDelete}>회원삭제</DeleteBtn>
                </>
            ) : (
                <p>로딩 중..</p>
            )}
        </DetailWrapper>
    );
}
export default DetailCom;