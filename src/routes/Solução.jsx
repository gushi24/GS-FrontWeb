import SideBar, { SideBarItem } from "../components/SideBar"
import { FaHome } from "react-icons/fa";
import { MdQuestionAnswer } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.svg'
import Graph1 from '../assets/Graph01.svg'
import Graph2 from '../assets/Graph02.svg'
import { MdDashboard } from "react-icons/md";
import { MdOutlineTableView } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaBoltLightning } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import { FaSignInAlt } from "react-icons/fa";


const Solução =()=>{
    return(
        <>
            <body className="grid grid-cols-[auto_1fr] bg-white">
                <aside>
                    <SideBar>
                        <Link to='/'>
                            <SideBarItem icon={<FaHome size={20}/>} text='Home'/>
                        </Link>
                        
                        <Link to='/sobre'>
                            <SideBarItem icon={<BsFillPeopleFill size={20}/>} text='Sobre'/>
                        </Link>

                        <Link to='/solução'>
                            <SideBarItem icon={<MdQuestionAnswer size={20}/>} text='Solução' active/>
                        </Link>
                    </SideBar>
                </aside>
                
                <section>
                    <div className="flex m-10 p-2 border rounded-sm">
                       <nav className="bg-gray-700 w-48 rounded-xl">
                            <div className="flex items-center justify-center">
                                <img src={Logo} alt="logo" className="w-36 py-5 border-b-[1px]"/>
                            </div>

                            <div className="pt-6 pb-10">
                                <ul>
                                    <li className="flex text-white items-center bg-blue-600 rounded-lg px-4 py-3 mx-4 my-4">
                                        <MdDashboard size={25} className="fill-white     "/>
                                        <span>Dashboard</span>
                                    </li>
                                    <li className="flex text-white items-center rounded-lg px-4 mx-4 my-4">
                                        <MdOutlineTableView size={25} className="fill-white     "/>
                                        <span>Tabelas</span>
                                    </li>
                                    <li className="flex text-white items-center rounded-lg px-4 mx-4 my-4">
                                        <FaMoneyBills size={25} className="fill-white   "/>
                                        <span>Contas</span>
                                    </li>
                                    <li className="flex text-white items-center rounded-lg px-4 mx-4 my-4">
                                        <FaBell size={25} className="fill-white     "/>
                                        <span>Notificações</span>
                                    </li>
                                    <li className="flex text-white items-center rounded-lg px-4 mx-4 my-4">
                                        <IoMdPerson size={25} className="fill-white     "/>
                                        <span>Usuário</span>
                                    </li>
                                    <li className="flex text-white items-center rounded-lg px-4 mx-4 my-4">
                                        <FaSignInAlt size={25} className="fill-white    "/>
                                        <span>Login</span>
                                    </li>
                                </ul>

                                
                            </div>

                            <div>
                                <button className="bg-blue-600 mb-6 mx-2 rounded-xl font-bold p-1 text-white">Upgrade para a versão pro</button>
                            </div>
                       </nav>

                       <div>
                            <div className="flex gap-7">
                                <div>
                                    <div className="relative ml-5 my-5 flex w-64 flex-col rounded-xl bg-gray-50 bg-clip-border text-gray-700 shadow-md">
                                        
                                        <div className="flex justify-between">
                                            <div className="items-center flex justify-center relative mx-4 -mt-5 h-16 w-16 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-yellow-500 to-yellow-600">
                                            <FaLightbulb size={30}/>
                                            </div>
                                            <div className="pr-4">
                                                <h5 className="mb-2 block font-semibold antialiased">
                                                Gasto Mensal
                                                </h5>
                                                <p className=" pl-7 block font-sans text-base font-bold leading-relaxed text-inherit antialiased">
                                                R$641,94
                                                </p>  
                                            </div>
                                            
                                        </div>
                                        <div className="py-4">
                                            <p className="pl-4 text-xs">
                                            <span className="text-red-600 font-bold pr-1">
                                            +5%
                                            </span>
                                            Gasto que mês passado
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="relative my-5 flex w-64 flex-col rounded-xl bg-gray-50 bg-clip-border text-gray-700 shadow-md">
                                        <div className="flex justify-between">
                                            <div className="items-center flex justify-center relative mx-4 -mt-5 h-16 w-16 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-yellow-500 to-yellow-600">
                                            <FaBoltLightning size={30}/>
                                            </div>
                                            <div className="pr-4">
                                                <h5 className="mb-2 block font-semibold antialiased">
                                                Energia Gerada
                                                </h5>
                                                <p className=" pl-7 block font-sans text-base font-bold leading-relaxed text-inherit antialiased">
                                                68,16 kWh
                                                </p>  
                                            </div>
                                            
                                        </div>
                                        <div className="py-4">
                                            <p className="pl-4 text-xs">
                                            <span className="text-green-600 font-bold pr-1">
                                            +32%
                                            </span>
                                            Economizado no mês de Setembro
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative my-5 flex w-64 flex-col rounded-xl bg-gray-50 bg-clip-border text-gray-700 shadow-md">
                                        <div className="flex justify-between">
                                            <div className="items-center flex justify-center relative mx-4 -mt-5 h-16 w-16 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-yellow-500 to-yellow-600">
                                            <TbAirConditioning size={30}/>
                                            </div>
                                            <div className="pr-4">
                                                <h5 className="mb-2 block font-semibold antialiased">
                                                Ar Condicionado
                                                </h5>
                                                <p className=" pl-7 block font-sans text-base font-bold leading-relaxed text-inherit antialiased">
                                                113,12 kWh
                                                </p>  
                                            </div>
                                            
                                        </div>
                                        <div className="py-4">
                                            <p className="pl-4 text-xs">
                                            Cerca de 
                                            <span className="text-red-600 font-bold px-1">
                                            23%
                                            </span>
                                            a mais na conta de luz
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className="flex justify-around">
                                    <div class="relative flex mx-4 mt-7 flex-col rounded-xl bg-gray-50 bg-clip-border text-gray-700 shadow-md">
                                    <div class="relative mx-4 -mt-6 overflow-hidden rounded-xl ">
                                        <img src={Graph1}/>
                                    </div>
                                    <div class="p-6">
                                        <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        Consumo de Energia
                                        </h5>
                                        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                        Resumo de dados da última semana
                                        </p>
                                    </div>
                                    <div class="p-6 pt-0">
                                        <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                        Saiba Mais
                                        </button>
                                    </div>
                                </div>

                                <div class="relative flex mx-4 mt-7 flex-col rounded-xl bg-gray-50 bg-clip-border text-gray-700 shadow-md">
                                    <div class="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                                        <img src={Graph2}/>
                                    </div>
                                    <div class="p-6">
                                        <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        Consumo de Energia
                                        </h5>
                                        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                        Resumo de dados dos últimos meses 
                                        </p>
                                    </div>
                                    <div class="p-6 pt-0">
                                        <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                        Saiba Mais
                                        </button>
                                    </div>
                                </div>
                                </div>
                       </div>
                       
                    </div>
                </section>
            </body>
            
        </>
    )
}
export default Solução