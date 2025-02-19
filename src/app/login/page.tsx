"use client"
import { useForm } from 'react-hook-form';
import GoogleIcon from '@mui/icons-material/Google';
import Link from 'next/link';
import { CheckBox } from '@mui/icons-material';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className='mt-10 mx-4'>
            <form onSubmit={handleSubmit((data) => console.log(data))} className='bg-page mx-auto container max-w-screen-sm md:max-w-screen-md rounded-xl '>
                <div className='p-9 '>
                    <div className="flex flex-col sm:items-center justify-center gap-1 pb-6 font-alt">
                        <h2 className='text-lg sm:text-xl'>Login to your account</h2>
                        <h5 className='text-s sm:text-lg'>Welcome back 👋 </h5>
                    </div>

                    <button type='button' className="flex items-center justify-center mx-auto gap-2 sm:gap-5 border-2 border-black w-full h-auto p-2 rounded-lg">
                        <GoogleIcon color="action" sx={{ fontSize: 25 }}/> 
                        <p className='text-xs sm:text-lg font-alt'>Continue with Google</p>
                    </button>

                    <div className="relative flex pt-8 items-center mx-4">
                        <div className="flex-grow border-t border-gray-600"></div>
                        <span className="flex-shrink mx-4 text-black">OR</span>
                        <div className="flex-grow border-t border-gray-600"></div>
                    </div>
                    
                    <div className="flex flex-col py-8 gap-6">
                        <div className="flex flex-col">
                            <label htmlFor="email" className='text-lg font-alt'>Email</label>
                            <input {...register('email')} placeholder='example@gmail.com'  className='text-xs p-3 rounded-md bg-transparent border-2 border-black outline-gray-500'/>
                        </div>
                        <div className="flex flex-col pb-4">
                            <label htmlFor="password" className='text-lg font-alt'>Password</label>
                            <input {...register('password', { required: true })} placeholder='********' className='p-3 rounded-md bg-transparent border-2 border-black outline-gray-500'/>
                        </div>
                        <div className="flex justify-between text-xs sm:text-lg font-alt gap-4">
                            <span className='flex gap-1 items-center'>
                                <input type='checkbox' className=''/>
                                <p>Remember me</p>
                            </span>
                            
                            <Link href='/' className=' hover:text-background'>Forgot Password?</Link>  
                        </div>
                        {errors.email && <p>Last name is required.</p>}
                        <button type="submit" className='border-2 border-black  p-3 mx-auto w-1/2 rounded-lg text-xs sm:text-lg hover:bg-buttonColor '>Login</button>
                    </div>
                    <div className='flex mx-auto w-1/3 gap-1'>
                        <Link href='/' className=' hover:text-buttonColor'>Don't have an account?</Link> 
                        <Link href='/' className=' hover:text-buttonColor'>Sign up</Link> 
                    
                    </div>
                </div>
                
            </form>
        </div>
    );
}


export default Login;