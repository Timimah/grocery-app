import React from 'react'
import { Layout } from '../components/Layout'
import Shpnimg2 from '../images/womanshopping.webp'

export const Faqs = () => {
    return (
        <>
            <Layout>
                <div className='Faqs'>
                    <div className='h-[30rem] bg-black'>
                        <img className='object-top object-cover w-full h-[30rem] opacity-90' src={Shpnimg2} alt="" />
                        <div className="-mt-[15rem] text-center mix-blend-luminosity text-7xl ">
                            Frequently asked Questions
                        </div>
                    </div>
                    <div className='bg-[#636f3f] mt-0'>
                        <div className='py-[6rem] mx-auto w-1/2'>
                            <div className=' text-lg mb-8 text-justify'>
                                <p className='text-3xl mb-8'>This is a frequently asked question?</p>
                                <p>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</p>
                            </div>
                            <div className=' text-lg my-8 text-justify'>
                                <p className='text-3xl mb-8'>This is a frequently asked question?</p>
                                <p>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</p>
                            </div>
                            <div className=' text-lg my-8 text-justify'>
                                <p className='text-3xl mb-8'>This is a frequently asked question?</p>
                                <p>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</p>
                            </div>
                            <div className=' text-lg mt-8 mb-14 text-justify'>
                                <p className='text-3xl mb-8'>This is a frequently asked question?</p>
                                <p>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
