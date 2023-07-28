import React from 'react'
import { Layout } from '../components/Layout'

export const Contact = () => {
  return (
    <>
        <Layout>
            <div className='flex w-full px-8 mt-8 mb-32'>
                <div className=' w-1/2 text-left'>
                    <p className='text-7xl mb-10'>Contact Us</p>
                    <p className='text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At illo quasi ipsum, recusandae sed voluptatem exercitationem incidunt dolore obcaecati repellendus tempore vel doloribus ea dolorem similique enim? Commodi, iusto unde!
                    </p><br />
                    <p>
                        email@example.com <br /> (555)555-5555
                    </p>
                    <p>123, Demo Street <br /> New York, NY 12345</p>
                </div>
                <div className='ml-20 grid text-left'>
                    <div className='mb-10'>
                        <label htmlFor="">Name</label><br />
                        <input className='p-3 mt-4 rounded-sm' type="text" placeholder='First Name' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input className='p-3 mt-4 rounded-sm' type="text" placeholder='Last Name' />
                    </div>
                    <div className='mb-10'>
                        <label htmlFor="">Email</label>
                        <input className='w-full p-3 mt-4 rounded-sm' placeholder='example@gmail.com' type="text" />
                    </div>
                    <div className='mb-10'>
                        <label htmlFor="">Message</label>
                        <input className='h-36 w-full mt-4 rounded-sm p-3 text-justify' placeholder='Write your message here ...' type="text" name="" id="" />
                    </div>
                    <div>
                        <button className='rounded-full bg-[#636f3f] text-xl  px-5 py-3'>Send</button>
                    </div>
                </div>
            </div>
        </Layout>
    </>
  )
}
