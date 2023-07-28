import React from 'react'
import Shpnimg from '../images/bunchofgroceries.webp'

export const Aboutbrand = () => {
    return (
        <>
            <div className='mb-20 h-[25rem]'>
                <img src={Shpnimg} className='w-full h-[25rem] object-cover' alt="" />
                <div className="bg-[#636f3f] w-1/3 -mt-[18rem] mx-auto mix-blend-luminosity rounded-xl px-10 text-lg">
                    <p className='text-5xl py-5'>More about our brand</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque hic autem facilis perspiciatis natus reiciendis, placeat, tenetur dignissimos ex eius maiores, eos sapiente pariatur voluptatem dolorum? Quibusdam mollitia eaque quasi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae perferendis nemo a beatae error, iure alias, rem veniam incidunt, veritatis reiciendis quisquam eaque? Velit non, tempora sunt consectetur explicabo nisi</p>
                    <p className='py-10'>Learn more</p>
                </div>
            </div>
            <div className='mt-[23rem] mb-[6rem]'>
                <p className='text-5xl pb-[6rem]'>Socials</p>
                <div className='flex justify-around px-20'>
                    <p>Twitter</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Tumbler</p>
                </div>
            </div>
        </>
    )
}
