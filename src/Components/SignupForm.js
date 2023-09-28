import { useState } from "react"
import { Link } from "react-router-dom"
// import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"


export function SignupForm({ setIsloggedin }) {

    const Navigate = useNavigate();

    const [hidden, setHidden] = useState(false)
    const [Conhidden, setConhidden] = useState(false)
    const [accounttype,setAccounttype]=useState("student")


    function ConHiddenHandler() {
        setConhidden((prev) => !prev)
    }
    function hiddenHandler() {
        setHidden((prevd) => !prevd)
    }


    const [formData, setFormData] = useState(
        {
            fName: "",
            lName: "",
            email: "",
            password: "",
            confirm: ""
        }
    )

    // console.log(formData)

    function changeHandler(event) {

        setFormData((prevdata) => {
            return {
                ...prevdata,
                [event.target.name]: event.target.value
            }
        })

    }


    function submitHandler(e) {
        e.preventDefault();
        if (formData.password != formData.confirm) {
            toast.error("Password dosn't Match")
        } else {
            toast.success("Account has been created ")

            console.log(formData)
            setIsloggedin(true)
            Navigate('/Dashboard')

        }



    }
    return (

        <div>

            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button    className={`${accounttype==="student"?
                "bg-richblack-900 text-richblack-5":
                "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}


                onClick={()=>{setAccounttype('student')  }}
                >Student</button>
                <button onClick={()=>{setAccounttype('instructor')}}
                 className={`${accounttype==="instructor"?
                 "bg-richblack-900 text-richblack-5":
                 "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
 
                >Tutour</button>

            </div>
            <form onSubmit={submitHandler}>


                <div className="flex justify-between">

                    <label htmlFor="fName">
                        <p className="text-[0.857rem] text-richblack-5 mb-1 leading-[1.385rem]">  First Name<sup className="text-pink-200"> *</sup></p>

                        <input
                            className="bg-richblack-800 rounded-[0.8rem] text-richblack-5 w-full p-[12px] "

                            type="text"
                            required
                            placeholder="First NAme"
                            onChange={changeHandler}
                            value={formData.fName}
                            id="fName"
                            name="fName"
                        />
                    </label>
                    <label htmlFor="lName">
                        <p className="text-[0.857rem] text-richblack-5 mb-1 leading-[1.385rem]">  Last Name<sup className="text-pink-200"> *</sup></p>

                        <input
                            className="bg-richblack-800 rounded-[0.8rem] text-richblack-5 w-full p-[12px] "

                            type="text"
                            required
                            placeholder="last NAme"
                            onChange={changeHandler}
                            value={formData.lName}
                            id="lName"
                            name="lName"

                        />
                    </label>
                </div>







<div className="mt-[20px]">


                <label htmlFor="email mt-6 ">
                    <p className="text-[0.857rem] text-richblack-5 mb-1 leading-[1.385rem]">  Email<sup className="text-pink-200"> *</sup></p>

                    <input
                        className="bg-richblack-800 rounded-[0.8rem] text-richblack-5 w-full p-[12px] "

                        type="email"
                        required
                        onChange={changeHandler}
                        value={formData.email}
                        name="email"
                        id="email"
                        placeholder="Enter email address"
                    />

                </label>

</div>

                <div className="flex justify-between mt-[20px]  ">
                    <div className="relative">
                        <label htmlFor="password">
                            <p className="text-[0.857rem] text-richblack-5 mb-1 leading-[1.385rem]">Create  Passsword<sup className="text-pink-200"> *</sup></p>
                            <input
                                className="bg-richblack-800 rounded-[0.8rem] text-richblack-5 w-full p-[12px] "

                                type={hidden ? "password" : "text"}
                                required
                                onChange={changeHandler}
                                value={formData.password}
                                name="password"
                                id="password"
                                placeholder="Password"
                            />
                            <span
                                className="absolute text-white right-3 top-[40px] cursor-pointer"

                                onClick={hiddenHandler}>
                                {
                                    hidden ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
                                }
                            </span>

                        </label>
                    </div>

                    <div className="relative">


                        <label htmlFor="Confirm">
                            <p className="text-[0.857rem] text-richblack-5 mb-1 leading-[1.385rem]">Confirm Password<sup className="text-pink-200"> *</sup></p>
                            <input
                                className="bg-richblack-800 rounded-[0.8rem] text-richblack-5 w-full p-[12px] "

                                type={Conhidden ? "password" : "text"}
                                required
                                onChange={changeHandler}
                                value={formData.confirm}
                                name="confirm"
                                id="confirm"
                                placeholder="Confirm password"
                            />


                            <span
                                className="absolute text-white right-3 top-[40px] cursor-pointer"

                                onClick={ConHiddenHandler}>
                                {
                                    Conhidden ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
                                }
                            </span>
                        </label>
                    </div>
                </div>
                <Link to="#">
                    <p className="text-blue-100 text-xs mt-1  max-w-max ml-auto" >Forget password</p>
                </Link >
                <button className="w-full bg-yellow-400 h-10 mt-6 rounded-md font-mono ">Create Account</button>
            </form>
        </div>
    )
}