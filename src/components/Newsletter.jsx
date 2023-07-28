import React from 'react'
import Shpnimg from '../images/bunchofgroceries.webp'

export const Newsletter = () => {
    return (
        <>
            <div className='mb-20 h-[30rem]'>
                <img src={Shpnimg} className='w-full h-[30rem] object-cover' alt="" />
                <div className="w-1/2 -mt-[27rem] mx-auto  mix-blend-luminosity text-lg ">
                    <p className='text-5xl py-5'>Subscribe</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque hic autem facilis perspiciatis natus reiciendis, placeat, tenetur dignissimos ex eius maiores, eos sapiente pariatur voluptatem dolorum? Quibusdam mollitia eaque quasi?</p>
                    <p className='text-[#636f3f] py-10'>
                        <input className='w-64 p-4 outline outline-1 outline-[#636f3f] mb-10' type="text" placeholder="Email Address" name="" id="" /><br />
                        <button className='rounded-full bg-[#a51c1c] text-xl text-white px-5 py-3'>Sign Up</button>
                    </p>
                </div>
            </div>
        </>
    )
}