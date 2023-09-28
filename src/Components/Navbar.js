import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast';

export function Navbar(props) {
    const setIsloggedin = props.setIsloggedin;
    const isLoggedin = props.isLoggedin;
    return (

        <div className='flex justify-between h-[50px] items-center  w-11/12 max-w-[1160px]  py-6 mx-auto '>
            <Link to="/">
                <img src={logo} width={160} height={32} loading='lazy'></img>
            </Link>

            <nav className='text-[20px]  text-white  font-bold'>
                <ul className='text-richblack-100 flex gap-x-6'>
                    <li>
                        <Link to="/">
                            Home

                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            About

                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            contact

                        </Link>
                    </li>
                </ul>
            </nav>


            <div className=' flex items-center gap-x-4 '>
                {!isLoggedin ? (<Link to="/Login"><button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700' >Login</button></Link>) :
                    (<Link to="/"><button
                    className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                        onClick={() => {
                            setIsloggedin(false);
                            toast.success("Logged Out")
                        }}
                    >LogOut</button>
                    </Link>)
                }
                {!isLoggedin ?
                    (<Link to="/Signup">
                        <button
                         className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                        >Signup</button>
                    </Link>) :
                    (<Link to="/Dashboard">
                        <button
                         className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                        >Dashboard</button>
                    </Link>)

                    // }{isLoggedin &&

                    // }{isLoggedin &&

                }


            </div>
        </div>


    );
}