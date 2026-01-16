import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../redux/authSlice";
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
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isLoggedIn, username} = useSelector(state=>state.auth);
    const onLogout = () => {dispatch(logout());
        navigate("/")
    }

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
                        <li><Link to="/list">LIST</Link> </li>
                    </ul>
                    <ul>
                        {isLoggedIn ? (<>
                            <span>{username} </span> &nbsp; 
                            <button onClick={onLogout}>로그아웃 </button>
                        </>) : 
                        <>
                        <li><Link to="/login">로그인</Link></li>
                        <li><Link to="/register">회원가입</Link></li>
                        </> 
                        }
                
                    </ul>
                </StyleNav>
            </StyleHeader>
        </WrapBlock>
    </>)
}

export default HeaderCom;