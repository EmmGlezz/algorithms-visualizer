import React, {useState} from 'react'
import {MdOutlineArrowBackIosNew} from 'react-icons/md'

const Sidebar = () => {
    const [open, setOpen] = useState(true)
    const menus = [
        {
            title: 'Brute Force Algorithm',
            icon: '/src/assets/brute-force.png'
        },
        {
            title: 'Recursive Algorithm',
            icon: '/src/assets/recursion.png'
        },
        {
            title: 'Randomized Algorithm',
            icon: '/src/assets/randomized.png'
        },
        {
            title: 'Sorting Algorithm',
            icon: '/src/assets/sorting.png'
        },
        {
            title: 'Searching Algorithm',
            icon: '/src/assets/searching.png'
        },
        {
            title: 'Hashing Algorithm',
            icon: '/src/assets/hashing.png'
        },
        {
            title: 'About',
            icon: '/src/assets/about.png',
            gap: true
        },
        {
            title: 'Contact',
            icon: '/src/assets/contact.png'
        },
    ]
    
  return (
    <div className={`${open ? 'w-72' : 'w-20'} p-5 pt-8 duration-300 h-screen bg-sky-900 relative`}>
        
        {/* Arrow Icon to close and open menu  */}
        <MdOutlineArrowBackIosNew 
        onClick={() => setOpen(!open)}
        className={`absolute cursor-pointer -right-3 top-9 ${open ? '' : 'rotate-180'} 
        w-7 border-2 p-1 border-sky-900 rounded-full bg-slate-50 text-sky-900`} 
        style={{height: '30px', width: '30px'}}
        />

        {/* Logo and title */}
        <div className='flex gap-x-4 items-center'>
            <img src="/src/assets/logo.png" alt="" 
            className={`cursor-pointer duration-500 rounded-full ${open && 'rotate-[360deg]'}`}
            style={{width: '40px'}}
            />
            <h1 className={`text-white origin-left font-medium text-xl 
            duration-300 ${!open && 'scale-0'}`}>Algorithm Visualizer</h1>
        </div>

        {/* Menu Items */}
        <ul className='pt-6'>
            {menus.map((menu, idx) => (
                <li key={idx} className={`text-gray-300 text-sm flex items-center 
                gap-x-4 cursor-pointer p-2 hover:bg-slate-500 rounded-md
                ${menu.gap ? 'mt-9' : 'mt-2'}`}>
                    <img width={'24px'} src={menu.icon} style={{filter: 'invert(100%) sepia(100%) saturate(1%) hue-rotate(5deg) brightness(105%) contrast(101%)'}} alt="" />
                    <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Sidebar