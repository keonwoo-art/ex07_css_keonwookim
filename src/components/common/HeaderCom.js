import { Link } from "react-router-dom";
import styled from "styled-components";
const WrapBlock = styled.div`
    position : fixed; width : 100%;
    z-index : 1;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    background-color : white;
`;
const StyleHeader = styled.header`
    margin: 0 auto; width: 1100px;
    display: flex; height: 100px; align-items:center;
`;
const StyleTitle=styled.h1`
    width : 200px;
    .link { color : black;};
    .link:hover { color: gray;}
`;
const StyleNav = styled.nav`
    display: flex;
    width: 100%; 
    justify-content: space-between;
    ul { display: flex;};
    ul li {margin-right: 30px;};
    .menu li a { font-size : 20px; font-weight:bold;}
    a {color: black;};
    a:hover {color: gray;}


`;

const HeaderCom = () => {
    return( <>
        <WrapBlock>
            <StyleHeader>
                <StyleTitle>
                    <Link to = "/" className="link">탱이냥</Link>
                </StyleTitle>
                <StyleNav>
                    <ul className="menu">
                        <li><Link to="">사료</Link></li>
                        <li><Link to="">간식</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/login">로그인</Link></li>
                        <li><Link to="">회원가입</Link></li>
                    </ul>
                </StyleNav>
            </StyleHeader>
        </WrapBlock>
    </>)
}

export default HeaderCom;