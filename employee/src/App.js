import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmpList from './EmpList';
import EmpCreate from './EmpCreate';
import EmpDetails from './EmpDetails';
import EmpEdit from './EmpEdit';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <h1>React CURD API</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/employee' element={<EmpList />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>
          <Route path='/employee/detail/:empId' element={<EmpDetails />}></Route>
          <Route path='/employee/edit/:empId' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
