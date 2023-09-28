// import { SignupForm } from "../Components/SignupForm";
import { Template } from "../Components/Template";

import signimg from "../assets/signup.png"
export function Signup({setIsloggedin}){
    return(

        <div>
             <div>
            <Template
             title="Welcome Back  "            
             desc1="Build skills for today ,tommor, and Beyond"
             desc2="Education to Future-Proof your Carrer"
            image={signimg}
            formtype="Signup"
            setIsloggedin={setIsloggedin}
            >

            </Template>


            
        
        </div>
        </div>
    );
}