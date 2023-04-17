import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import SideBarLogo from './SideBarLogo';
import SideBarItem from './SideBarItem';
import SideBarTweetButton from './SideBarTweetButton';

const SideBar = () => {
    const menuItems = [
        {
            label: 'Home',
            href: '/',
            icon: BsHouseFill
        },
        {
            label: 'Notifications',
            href: '/notifications',
            icon: BsBellFill
        },
        {
            label: 'Profile',
            href: '/user/123',
            icon: FaUser
        }
    ]
  return (
    <div className="col-span-1 h-full p-4 md:pr-6">
        <div className="flex flex-col item-end">
            <div className="space-y-2 lg:w-[230px]">
                <SideBarLogo />
                {menuItems.map((item) => (
                    <SideBarItem 
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        icon={item.icon}
                    />
                ))}
                <SideBarItem onClick={() => {}} icon={BiLogOut} label='Logout' />
                <SideBarTweetButton />
            </div>
        </div>
    </div>
  )
}

export default SideBar