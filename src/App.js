import logo from './logo.svg';
import './App.css';
import Test01 from './components/test/TestCom01';
import Test02 from './components/test/TestCom02';
import Test03 from './components/test/TestCom03';
import { Route, Routes } from 'react-router-dom';
import IndexCon from './containers/IndexCon';
import LoginCon from './containers/LoginCon';
import HeaderCom from './components/common/HeaderCom';
import RegCon from './containers/RegCon';
import ListCon from './containers/ListCon';
import DetailCon from './containers/DetailCon';

function App() {
  return (<>
    <Routes>
      <Route element = {<HeaderCom />}></Route>
        <Route path ='' element={<IndexCon />} />
        <Route path ='/login' element={<LoginCon />} />
        <Route path ='/register' element={<RegCon />} />
        <Route path ='/list' element={<ListCon />} />
        <Route path ='/detail/:id' element={<DetailCon />} />

    </Routes>


  {/*
    <Test03 test={"안녕하세요"} />
    */}
  </>
    
  );
}

export default App;
