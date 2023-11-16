import React from 'react'

const SideBarMobile = ({active}: {active:boolean}) => {
    if (!active) return;
  return (
    <div className=' bg-white flex-1'>SideBarMobile</div>
  )
}

export default SideBarMobile