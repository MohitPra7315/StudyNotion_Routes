// import { useState } from "react";
// import { LoginForm } from "../Components/LoginForm";
import { Template } from "../Components/Template";
import login from '../assets/login.png'
export function Login({setIsloggedin}){
  
    return(
    




        <div>
            <Template
             title="Welcome Back  "            
             desc1="Build skills for today ,tommor, and Beyond"
             desc2="Education to Future-Proof your Carrer"
            image={login}
            formtype="Login"
            setIsloggedin={setIsloggedin}
            >

            </Template>


            
        
        </div>
    );
}