import React from 'react'
import SideBar from './SideBar'
import FollowBar from './FollowBar'
interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className='h-screen bg-black'>
        <div className="container h-full mx-auto xl:px-30 max-w-6xl">
            <div className="grid grid-cols-4 h-full">
                <SideBar/>
                <div className="col-span-3 lg:col-span-2 border-neutral-800 border-x-[1px]">
                    {children}
                </div>
                <FollowBar />
            </div>
        </div>
    </div>
  )
}

export default Layout