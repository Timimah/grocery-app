// import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { Button } from './Button';
export const Navbar = ({ cartItems }) => {
    return (
        <>
            <div className='flex justify-between p-10 text-black'>
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
                        <Link to='/cart'>
                            Cart icon <sup>{cartItems}</sup>
                        </Link>
                    </div>
                    <div><Button title="Menu Button" /></div>
                </div>
            </div>
        </>
    )
}