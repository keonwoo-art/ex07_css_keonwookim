import logo from './logo.svg';
import './App.css';
import Test01 from './components/test/TestCom01';
import Test02 from './components/test/TestCom02';
import Test03 from './components/test/TestCom03';
import { Route, Routes } from 'react-router-dom';
import IndexCon from './containers/IndexCon';
import LoginCon from './containers/LoginCon';

function App() {
  return (<>
    <Routes>
      <Route path ='' element={<IndexCon />} />
      <Route path ='/login' element={<LoginCon />} />

    </Routes>


  {/*
    <Test03 test={"안녕하세요"} />
    */}
  </>
    
  );
}

export default App;
