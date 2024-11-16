import Logo from '../assets/logo.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer =()=>{
    return(
        <>
            <footer className='border-t border-black'>
                <div className='flex justify-center items-center p-4'>
                    <img src={Logo} alt='logo'/>
                </div>
                <div className='flex justify-around py-7'>
                    <section className=''>
                        <h1 className='pb-2 font-bold'>About Us</h1>
                        <p className='w-64 text-xs'>consectetur adipiscing elit. Duis elementum tellus at nulla venenatis, ut vulputate nisl pellentesque. Donec nec eros semper ante ultrices auctor quis nec elit. Nulla pulvinar nisi felis, sit amet porttitor felis auctor vitae. Pellentesque enim magna, aliquet nec consectetur vitae, tristique posuere ligula. </p>
                    </section>
                    <section>
                        <h1 className='pb-2 font-bold'>Support</h1>
                        <h5>Tech Support</h5>
                        <h5>Documention</h5>
                        <h5>F.A.Q</h5>
                    </section>
                    <section>
                        <h1 className='pb-2 font-bold'>Quick Links</h1>
                        <h5>My Account</h5>
                        <h5>View Basket</h5>
                        <h5>Blog</h5>
                        <h5>Contact Us</h5>
                    </section>
                    <section>
                        <h1 className='pb-2 font-bold'>Social Connect</h1>
                        <div className='flex gap-1'>
                            <FaFacebookF size={25} className='p-[2px] border rounded border-black'/>
                            <FaTwitter size={25} className='p-[2px] border rounded border-black'/>
                            <FaInstagram size={25} className='p-[2px] border rounded border-black'/>
                            <FaYoutube size={25} className='p-[2px] border rounded border-black'/>
                        </div>
                        <span>All Rights Reserved</span>
                    </section>
                </div>
            </footer>
        </>
    )
}
export default Footer