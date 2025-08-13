import React from 'react'

export function CategoryItem (props)  {
  return (
    <div style={{backgroundImage: `url(${props.image})` }} className="bg-cover h-[295px] flex flex-col justify-start gap- pl-6 pt-6 text-white text-2xl font-bold rounded-lg">
        <div className='text-[19px] font-500 leading-[22px] bold'>{props.name}</div>
        <div className='text-[15px] font-400 leading-[28px]'>{`${props.properties} properties`}</div>
    </div>
  )
}
