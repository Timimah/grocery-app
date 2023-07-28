import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <div className="bg-[#123f1e] text-white py-6">
            <div className='flex justify-around my-12'>
                <div>
                <div>
                    <Link to='/' className='text-4xl ml-10 font-[chiller]'>Grocers</Link>
                    <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, totam.</div>
                    <div>Socials</div>
                </div>
                </div>
                <div>
                    <p className='font-bold'>About</p><br />
                    <div className="flex flex-col">
                        <Link>lorem</Link>
                    <Link>lorem</Link>
                    <Link>lorem</Link>
                    <Link>lorem</Link>
                    </div>
                </div>
                <div>
                    <p className='font-bold'>Categories</p><br />
                    <div className="flex flex-col">
                        <Link>lorem</Link>
                    <Link>lorem</Link>
                    <Link>lorem</Link>
                    <Link>lorem</Link>
                    </div>
                </div>
                <div>
                    <p className='font-bold'>Help</p><br />
                    <div className="flex flex-col">
                        <Link>lorem</Link>
                    <Link>lorem</Link>
                    <Link>lorem</Link>
                    <Link>lorem</Link>
                    </div>
                </div>
                <div>
                    <p className='text-2xl'>Contact</p><br />
                    <p>email@example.com <br /> (555)555-5555 </p>
                </div>
            </div>
            <div className="text-center pt-6 border-t mx-20
        ">&copy; Enda Rae</div>
        </div>
    )
}