import React from 'react'

function page2() {
    return (
        <div className='flex flex-col 00 px-10 pt-20 '>this about page</div>
    )
}


export default function page() {
  return (
   <>
    <div className='flex flex-col bg-orange-100 px-10 pt-20 '>this about page</div>
    <page2 />
   </>
  )
}
