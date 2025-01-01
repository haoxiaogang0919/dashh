'use client'

import React from 'react'
import { ListIcon, LayoutGridIcon, CalendarIcon } from 'lucide-react';




const SectionTitle = ({title,icon}:{title:string,icon:string}) => {
  const Icon = icon === 'LayoutGrid' ? LayoutGridIcon : CalendarIcon;
  return (
    <div className='flex items-center justify-between'>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <div className='flex items-center  border-[1px] border-gray-200/90 dark:border-gray-800/50 rounded-md p-1'>
        <button className='inline-flex items-center justify-center whitespace-nowrap rounded-xl font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-3 text-xs'>
          <span className='inline-flex items-center gap-2'>
            <Icon className='w-4 h-4'/>
          </span>
        </button>
        <button className='inline-flex items-center justify-center whitespace-nowrap rounded-xl font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-3 text-xs'>
          <span className='inline-flex items-center gap-2'>
            <ListIcon className='w-4 h-4'/>
          </span>
        </button>
      </div>
    </div>  
  )
}

export default SectionTitle