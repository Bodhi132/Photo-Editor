import React from 'react'

const SidebarItem = ({name,active,handleclick}) => {
  return (
    <button className={`sidebar-item ${active?'active':''}`} onClick={handleclick}>
      {name}
    </button>
  )
}

export default SidebarItem