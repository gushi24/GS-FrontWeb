import SideBar, { SideBarItem } from "../components/SideBar"
import { FaHome } from "react-icons/fa";
import { MdQuestionAnswer } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import Logo from "../assets/logo.svg"
import { Link } from "react-router-dom";


const Cadastrar =()=>{
    return(
        <>
            <body className="grid grid-cols-[auto_1fr]">
                <aside>
                    <SideBar>
                        <Link to='/'>
                            <SideBarItem icon={<FaHome size={20}/>} text='Home'/>
                        </Link>
                        
                        <Link to='/sobre'>
                            <SideBarItem icon={<BsFillPeopleFill size={20}/>} text='Sobre'/>
                        </Link>

                        <Link to='/solução'>
                            <SideBarItem icon={<MdQuestionAnswer size={20}/>} text='Solução'/>
                        </Link>
                    </SideBar>    
                </aside>

                <section className="bg-gray-50 dark:bg-gray-900 flex justify-center">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <Link to='/' className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"> 
                            <img src={Logo} className="mr-2"/>
                        </Link>
                        
                        <div className="w-full bg-white p-3 rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign in to your account</h1>
                            </div>
                            <form className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                    <input type="email" name="email" placeholder="youremail@company.com" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 
                                    block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                                     dark:focus:border-blue-500" required/>
                                </div>
                                <div>
                                    <label htmlFor="user" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                    <input type="user" name="user" placeholder="Username" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 
                                    block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                                     dark:focus:border-blue-500" required/>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" placeholder="••••••••" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 
                                    focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"required/>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input type="checkbox" aria-describedby="remember" className="w-4 h-4 border border-gray-300 
                                            rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 
                                            dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember Me</label>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot Password</span>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none 
                                focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 
                                dark:focus:ring-primary-800">Sign Up</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account yet? 
                                    <Link to='/login' className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Sign In</Link></p>
                            </form>
                        </div>
                    </div>
                    
                    
                </section>     
            </body>
            
        </>
    )
}
export default Cadastrar