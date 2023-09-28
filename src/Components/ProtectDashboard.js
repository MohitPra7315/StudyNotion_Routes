
import {  Navigate, useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast";

 function ProtectDashboard({isLoggedin,children}){

    console.log(isLoggedin===true);
    // const Navigate=useNavigate();

        if(isLoggedin===true){
            return children
        }else{
            return(
                <Navigate to="/Login"/>
            )
        }

        // <Outlet></Outlet>
    
}
export default ProtectDashboard