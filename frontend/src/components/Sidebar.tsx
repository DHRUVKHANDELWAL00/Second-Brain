import React from 'react'
import SidebarItem from './SidebarItem'
import DocumentIcon from '../icons/DocumentIcon'
import { TagsIcon } from '../icons/TagsIcon'
import { LinkIcon } from '../icons/LinkIcon'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div>
        <SidebarItem text="Document" startIcon={<DocumentIcon/>}/>
        <SidebarItem text="Tags" startIcon={<TagsIcon/>}/>
        <SidebarItem text="Links" startIcon={<LinkIcon/>}/>
    </div>
  )
}

export default Sidebar