import React from 'react'
import smilingwoman from '../images/fruitss.png'
import woman from '../images/mang1.png'
import { Link } from 'react-router-dom'
import { DisplayCard } from './DisplayCard'
import { Button } from './Button'
import { Testimonial } from './Testimonial'

export const Landing = () => {
    const groceries = [
        {
            imageUrl: 'https://picsum.photos/id/627/2509/1673',
            name: 'Grocery Item 1',
            items: 10,
        },
        {
            imageUrl: 'https://picsum.photos/id/999/4000/2667',
            name: 'Grocery Item 2',
            items: 5,
        },
        {
            imageUrl: 'https://picsum.photos/id/627/2509/1673',
            name: 'Grocery Item 1',
            items: 10,
        },
        {
            imageUrl: 'https://picsum.photos/id/999/4000/2667',
            name: 'Grocery Item 2',
            items: 5,
        },
        {
            imageUrl: 'https://picsum.photos/id/627/2509/1673',
            name: 'Grocery Item 1',
            items: 10,
        },
        {
            imageUrl: 'https://picsum.photos/id/999/4000/2667',
            name: 'Grocery Item 2',
            items: 5,
        },
        {
            imageUrl: 'https://picsum.photos/id/627/2509/1673',
            name: 'Grocery Item 1',
            items: 10,
        },
        {
            imageUrl: 'https://picsum.photos/id/999/4000/2667',
            name: 'Grocery Item 2',
            items: 5,
        },
        {
            imageUrl: 'https://picsum.photos/id/627/2509/1673',
            name: 'Grocery Item 1',
            items: 10,
        },
        {
            imageUrl: 'https://picsum.photos/id/999/4000/2667',
            name: 'Grocery Item 2',
            items: 5,
        },// Add more grocery items here...
    ];

    const testimonials = [
        {
            name: "lorem",
            testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos sit, aut saepe officiis ipsum aspernatur deserunt eligendi aliquam blanditiis ratione soluta dolore vel earum impedit, expedita cumque nostrum! Natus."
        },
        {
            name: "lorem",
            testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos sit, aut saepe officiis ipsum aspernatur deserunt eligendi aliquam blanditiis ratione soluta dolore vel earum impedit, expedita cumque nostrum! Natus."
        },
        {
            name: "lorem",
            testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos sit, aut saepe officiis ipsum aspernatur deserunt eligendi aliquam blanditiis ratione soluta dolore vel earum impedit, expedita cumque nostrum! Natus."
        },
        {
            name: "lorem",
            testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos sit, aut saepe officiis ipsum aspernatur deserunt eligendi aliquam blanditiis ratione soluta dolore vel earum impedit, expedita cumque nostrum! Natus."
        },
        {
            name: "lorem",
            testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos sit, aut saepe officiis ipsum aspernatur deserunt eligendi aliquam blanditiis ratione soluta dolore vel earum impedit, expedita cumque nostrum! Natus."
        },
        {
            name: "lorem",
            testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos sit, aut saepe officiis ipsum aspernatur deserunt eligendi aliquam blanditiis ratione soluta dolore vel earum impedit, expedita cumque nostrum! Natus."
        },
        {
            name: "lorem",
            testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos sit, aut saepe officiis ipsum aspernatur deserunt eligendi aliquam blanditiis ratione soluta dolore vel earum impedit, expedita cumque nostrum! Natus."
        }
    ]

    return (
        <>
            <div className='absolute top-0 left-0 right-0 -z-10 items-center'>
                <div className='md:w-[80%] lg:w-[50%] md:ml-[25%] lg:ml-[40%] text-left mt-20 md:mt-48 px-16'>
                    <div className='pt-20 text-4xl md:text-5xl lg:text-6xl mb-6 font-semibold'>Make Healthy Life with <span className='text-[#23aa48]'>Fresh Grocery Products</span></div>
                    <div className='mb-6'>Get the best quality and most delicious grocery food in the world, you can get them on our website. Fresh grocery everyday to your family</div>
                </div>
                <div className="flex justify-center gap-2">
                    <Link to="/signup">
                        <Button styles="px-4 py-2 bg-[#123f1e] text-white rounded-lg" title="Shop now!" />
                    </Link>
                    <Link className='rounded-full bg-[#fb9334]'> <Button styles="px-4 py-2 bg-[orange] text-white rounded-lg" title="Order Process" /></Link>
                </div>
            </div>
            <img className='md:mt-20 md:h-[25rem] lg:h-[40rem] lg:ml-10 hidden md:block' src={smilingwoman} alt="woman smiling" />
            <div className="container mx-auto mt-[25rem] md:mt-0 py-8">
                <DisplayCard groceries={groceries} />
            </div>
            <div className="bg-gradient-to-tl from-transparent to-[#fff5dc] via-transparent h-[35rem] flex text-left px-16 md:px-24 pt-20">
                <div className='lg:w-[40%] flex flex-col gap-6'>
                    <p className='text-3xl md:text-4xl font-semibold'>
                        Best Quality Healthy and Fresh Groceries
                    </p>
                    <p className=''>We prioritize quality in each of our grocery below are the advantage of our product</p>
                    <ul className='flex flex-col gap-4'>
                        <li className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#23aa48" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                            </svg>
                            <p className="font-semibold">Lorem ipsum dolor sit.</p>
                        </li>
                        <li className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#23aa48" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                            </svg>
                            <p className="font-semibold">Lorem ipsum dolor sit.</p>
                        </li>
                        <li className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#23aa48" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                            </svg>
                            <p className="font-semibold">Lorem ipsum dolor sit.</p>
                        </li>
                        <li className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#23aa48" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                            </svg>
                            <p className="font-semibold">Lorem ipsum dolor sit.</p>
                        </li>
                    </ul>
                    <Link to="/signup"><Button styles="px-4 py-2 bg-[#2fac51] text-white rounded-lg" title="Shop Now!" /></Link>
                </div>
                <div className='bg-[#f0bf01] p-10 ml-[15em] w-[30%] h-[20rem] rounded-t-full rounded-b-[20em] mb-[20rem] hidden lg:block'>
                    <img className='absolute right-24 -mt-32' src={woman} alt="woman with groceries smiling" />
                </div>
            </div>
            <div className=''>
                <div className='text-3xl md:text-4xl lg:text-5xl font-bold px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nihil.</div>
                <div className="container mx-auto py-8">
                    <DisplayCard groceries={groceries} />
                </div>
            </div>
            <div className="bg-gradient-to-tr from-transparent to-[#fff5dc] via-transparent h-[35rem] flex text-left px-16 md:px-24 pt-20">
                <div className='bg-[#c0e8ac] p-10 mr-[15rem] w-[30%] h-[20rem] rounded-t-full rounded-b-[20em] mb-[20rem] hidden lg:block'>
                    <img className='absolute -left-24 -mt-32' src={woman} alt="woman with groceries smiling" />
                </div>
                <div className='lg:w-[40%] flex flex-col gap-6'>
                    <p className='text-3xl md:text-4xl font-semibold'>
                        Best Quality Healthy and Fresh Groceries
                    </p>
                    <p>We prioritize quality in each of our grocery below are the advantage of our product</p>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#23aa48" class="w-6 h-6">
                                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                                <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                                <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                            </svg>
                            Lorem ipsum dolor sit.</li>
                        <li className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#23aa48" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                            </svg>
                            Lorem ipsum dolor sit.</li>
                        <li className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#23aa48" class="w-6 h-6">
                                <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                                <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                            </svg>
                            Lorem ipsum dolor sit.</li>
                        <li className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#23aa48" class="w-6 h-6">
                                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clip-rule="evenodd" />
                            </svg>
                            Lorem ipsum dolor sit.</li>
                    </ul>
                    <Link to="/signup"><Button styles="px-4 py-2 bg-[#2fac51] text-white rounded-lg" title="Order Now!" /></Link>
                </div>
            </div>
            <div className='p-5'>
                <div className='text-3xl md:text-5xl font-semibold'>What our customers say about us</div>
                <div className="container mx-auto py-8">
                    <Testimonial testimonials={testimonials} />
                </div>
            </div>
        </>
    )
}
