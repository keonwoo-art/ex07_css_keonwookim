import StyleButton from "./BtnCom03";

function Test03(props){
    console.log(props)
    return(<>
        <StyleButton >Test03</StyleButton><br></br>
        <StyleButton width="100px" background={["255,0,0", 0.5]}>로그인</StyleButton>
    
    </>)
}
export default Test03;