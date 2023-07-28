import React from 'react'
import { Layout } from '../components/Layout'
import Aboutimg from '../images/attendant.jpg'

export const About = () => {
  return (
    <>
        <Layout>
            <div className='flex w-full px-8 mt-8 mb-32'>
                <div className=' w-1/2 text-left'>
                    <p className='text-7xl mb-10'>Who we are</p>
                    <p className='text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At illo quasi ipsum, recusandae sed voluptatem exercitationem incidunt dolore obcaecati repellendus tempore vel doloribus ea dolorem similique enim? Commodi, iusto unde!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet et adipisci voluptatum, natus, iure minima harum nemo hic molestiae temporibus in nihil impedit veritatis consequuntur minus reiciendis, necessitatibus atque quam.
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium porro autem similique expedita aperiam animi libero laboriosam voluptas cum doloremque rerum voluptates ipsa cumque, blanditiis doloribus esse ut dignissimos temporibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur necessitatibus, impedit quo ipsum, deleniti quia praesentium recusandae sit architecto culpa nulla at quidem autem odio voluptatibus ducimus. Nostrum, incidunt.
                    </p>
                </div>
                <div className='w-1/2 ml-20'>
                    <img className='w-full h-[35rem] object-cover' src={Aboutimg} alt="" />
                </div>
            </div>
        </Layout>
    </>
  )
}
