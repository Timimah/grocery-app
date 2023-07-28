// import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export const Navbar2 = () => {
    return (
        <>
            <div className='flex justify-between p-10'>
                <div>
                    <Link to='/' className='text-4xl ml-10 font-[chiller]'>Grocers</Link>
                </div>
                <div className='flex gap-3'>
                    <div>
                        <Link to='/shop' className='hover:text-[#292e1a]'>Shop</Link>
                    </div>
                    <div>
                        <Link to='/about' className='hover:text-[#292e1a]'>About</Link>
                    </div>
                    <div>
                        <Link to='/contact' className='hover:text-[#292e1a]'>Contact</Link>
                    </div>
                    <div>
                        <Link to='/faqs' className='hover:text-[#292e1a]'>FAQs</Link>
                    </div>
                    <div>
                        <Link to='/services' className='hover:text-[#292e1a]'>Services</Link>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div>
                        <Link to='/signup'>
                        Sign up
                        </Link>
                    </div>
                    <div>Menu button</div>
                </div>
            </div>
        </>
    )
}