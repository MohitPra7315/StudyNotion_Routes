import frame from '../assets/frame.png'
import { LoginForm } from './LoginForm'
import { SignupForm } from './SignupForm'
import {FcGoogle} from "react-icons/fc"


export function Template({ title, desc1, desc2, image, formtype, setIsloggedin }) {
    return (
        <div className='w-11/12 max-w-[1160px] py-12 mx-auto justify-between gap-y-0 flex '>
            <div className='w-11/12 max-w-[450px]' >
                <h1 className=' text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem] '>{title}</h1>
                <p className='text-[1.125rem] leading [1.625rem] mt-4 '>
                    <span className='text-richblack-100'>{desc1}</span>
                    <br>
                    </br>
                    <span className='text-blue-100 italic'> {desc2}</span>

                </p>
                {
                    formtype === "Signup"?
                    (<SignupForm setIsloggedin={setIsloggedin}/>):
                    (<LoginForm setIsloggedin={setIsloggedin} />)
                }

               <div className='flex flex-row w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] bg-richblack-700 w-full '></div>
                <p className='text-richblack-700  font-medium leading-[1.375rem]  '>or</p>
                <div className='h-[1px] bg-richblack-700 w-full '></div>
               </div>

                <button className='flex  w-full border justify-center items-center rounded-[8px] font-medium text-richblack-100 border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                    <FcGoogle/>
                    <p>Sign up with Google</p>
                </button>
            </div>
            <div className='relative w-11/12 max-w-[450px]'>

                <img src={frame}
                    height={504}
                    width={558}
                    loading='lazy' />
                <img src={image}
                    height={404}
                    width={558}
                    loading='lazy'
                    className='absolute -top-4 right-4'
                    />

            </div>
        </div>
    )
}