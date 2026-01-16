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

function DetailCom({member, loading, error, onBack, onDelete} ){
    if (loading) return <h2 style={{ textAlign: "center", marginTop: "150px" }}>로딩 중...</h2>;
    if (error) return <h2 style={{ textAlign: "center", marginTop: "150px", color: "red" }}>{error}</h2>;

    return (
        <DetailWrapper>
            <h1>사용자 상세 프로필</h1>
            {member ? (
                <>
                    <InfoBox>
                        <p><strong>username:</strong> {member.id}</p>
                        <p><strong>password</strong> {member.password}</p>
                        <p><strong>ROLE</strong> {member.role}</p>
                    </InfoBox>
                    <BackBtn onClick={onBack}>목록으로 돌아가기</BackBtn>
                    <DeleteBtn onClick={onDelete}>회원삭제</DeleteBtn>
                </>
            ) : (
                <p>사용자 정보를 찾을 수 없습니다.</p>
            )}
        </DetailWrapper>
    );
}
export default DetailCom;