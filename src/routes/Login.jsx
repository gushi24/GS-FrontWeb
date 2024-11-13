import SideBar, { SideBarItem } from "../components/SideBar"
import { FaHome } from "react-icons/fa";
import { MdQuestionAnswer } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";


const Login =()=>{
    return(
        <>
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
        </>
    )
}
export default Login