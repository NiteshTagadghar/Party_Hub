"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

function Signup() {

    const router=useRouter()
    const [userDetail,setUserDetail]=useState({name:"",password:""})
    const [confirmPassword,setConfirmPassword]=useState("")

    const getUserName=(e:any)=>{
        setUserDetail({...userDetail, name:e.target.value})
        console.log(userDetail,'user detail in get user name')
    }

    const getUserPassword=(e:any)=>{
        setUserDetail({...userDetail , password:e.target.value})
        console.log(userDetail,'user detail in get user password')

    }

    const signUpUser = ()=>{
        //Check if both passwords are same
        if(userDetail.password!==confirmPassword){
            alert("Passwords are not same !!!")
            return
        }
        alert("Signed Up successfully !!!")
        router.push('/')
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center min-h-screen px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="flex">
                    <a href="#" className="flex items-center mb-6 text-4xl md:text-6xl font-bold  dark:text-white">
                        <span className='text-orange-300'>
                            Party Hub
                        </span>
                    </a>
                    <img src="https://cdn-icons-png.flaticon.com/128/12068/12068404.png" className="ml-4 h-14 w-14" alt="Party Hub Logo" />
                </div>
                <div className="w-full bg-white rounded-lg shadow md:border dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                        <h1 className="text-xl md:text-2xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white">
                            Sign up to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action={signUpUser} >
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    onChange={(e)=>getUserName(e)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={(e)=>getUserPassword(e)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={(e)=>setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Sign up
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup