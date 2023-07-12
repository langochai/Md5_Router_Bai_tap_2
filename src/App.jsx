import {Login} from "./components/Login.jsx";
import {Employee} from "./components/Employee.jsx";
import {EmployeeDetail} from "./components/EmployeeDetail.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Employee/>}/>
            <Route path="/employee" element={<EmployeeDetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
