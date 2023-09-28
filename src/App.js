import "./App.css";
import { Routes, Route } from 'react-router-dom'
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { Dashboard } from "./Pages/Dashboard";
import { useState } from "react";
import ProtectDashboard from "./Components/ProtectDashboard";
import { Main } from "./Components/Main";


function App() {

  const [isLoggedin, setIsloggedin] = useState(false);
  console.log(isLoggedin)



  return <div className="w-screen h-screen bg-richblack-900 flex flex-col">

    <Navbar isLoggedin={isLoggedin} setIsloggedin={setIsloggedin}></Navbar>


    <Routes>
      <Route path="/" element={<Main />} >
        <Route index element={<Home isLoggedin={isLoggedin} setIsloggedin={setIsloggedin} />}></Route>
        <Route path="/Login" element={<Login setIsloggedin={setIsloggedin}></Login>}></Route>
        <Route path="/Signup" element={<Signup setIsloggedin={setIsloggedin} />}></Route>

        <Route path="/Dashboard" element={
          <ProtectDashboard isLoggedin={isLoggedin}>
            <Dashboard />
          </ProtectDashboard>}>

        </Route>

      </Route>
    </Routes>

  </div>;
}

export default App;
