import React from 'react'

export function CategoryItem (props)  {
  return (
    <div style={{backgroundImage: `url(${props.image})` }} className="bg-cover h-[295px] w-[256px] flex flex-coll justify-start pl-6 pt-6 text-white text-2xl font-bold rounded-lg">
        <div>{props.name}</div>
        <div>{`${props.properties} properties`}</div>
    </div>
  )
}
