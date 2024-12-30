import React, { ReactElement } from 'react'

interface SidebarItemProps{
    text:string,
    startIcon:ReactElement
}

const defaultStyles=`flex items-center justify-between  py-2 px-10`

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <div className={`${defaultStyles}`}>
    {props.startIcon}
    {props.text}
    </div>
  )
}

export default SidebarItem