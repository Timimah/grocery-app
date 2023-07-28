import React from 'react'
import { categories } from './data'

export const Sidenav = ({onCategorySelect }) => {
  return (
    <>
      <div className='h-[100%] z-1 p-5'>
        <div className=''>
          <p className='text-3xl font-semibold'>All</p><br />
          <ul className='text-lg px-3 cursor-pointer'>
            {categories.map((category) => (
              <li key={category.id} onClick={() => onCategorySelect(category.name)}>
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
