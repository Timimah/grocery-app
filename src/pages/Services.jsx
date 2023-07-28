import React from 'react'
import { Layout } from '../components/Layout'
import Shpnimg from '../images/attendant.jpg'
import quote from '../images/womanshopping.webp'
export const Services = () => {
    return (
        <>
            <Layout>
                <div className='mb-20 h-[20rem]'>
                    <img src={Shpnimg} className='w-full h-[20rem] object-cover' alt="" />
                    <div className="w-1/2 -mt-[15rem] ml-16 mix-blend-luminosity text-lg ">
                        <p className='text-7xl'>Our Services</p>
                    </div>
                </div>
                <div className='flex pb-20'>
                    <div className='text-5xl w-1/3'>What we offer</div>
                    <div className='grid grid-cols-2 w-2/3 gap-10'>
                        <div className='text-lg px-8'>
                            <p className='text-3xl'>Service 1</p><br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloribus magnam sunt atque veritatis blanditiis maiores unde perferendis expedita illo velit nulla repellat saepe earum aut autem explicabo, quo corrupti.</p>
                        </div>
                        <div className='text-lg px-8'>
                            <p className='text-3xl'>Service 1</p><br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloribus magnam sunt atque veritatis blanditiis maiores unde perferendis expedita illo velit nulla repellat saepe earum aut autem explicabo, quo corrupti.</p>
                        </div>
                        <div className='text-lg px-8'>
                            <p className='text-3xl'>Service 1</p><br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloribus magnam sunt atque veritatis blanditiis maiores unde perferendis expedita illo velit nulla repellat saepe earum aut autem explicabo, quo corrupti.</p>
                        </div>
                        <div className='text-lg px-8'>
                            <p className='text-3xl'>Service 1</p><br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloribus magnam sunt atque veritatis blanditiis maiores unde perferendis expedita illo velit nulla repellat saepe earum aut autem explicabo, quo corrupti.</p>
                        </div>
                    </div>
                </div>
                <div className='flex px-10'>
                    <div className='w-[50%]'>
                        <p className='text-7xl'>The Results</p>
                        <br />
                        <div className='bg-[#636f3f] text-5xl] ml-44'>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, atque aspernatur. Quaerat dolorem totam saepe fugit mollitia placeat dolorum officiis fuga voluptatum in! Facilis ex officiis facere. Deleniti, similique itaque.” <span className='text-sm'>— Quote source</span></div>
                    </div>
                    <div className='w-[50%]'>
                        <img className='bg-black w-full h-[70%] object-cover' src={quote} alt="" />
                    </div>
                </div>
            </Layout>
        </>
    )
}
