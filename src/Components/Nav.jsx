import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../Constants'
import { useState } from 'react'

const Nav = () => {

const [open, setOpen] = useState(false)

  return (
    <header className="padding-x py-8 absolute z-20 w-full">
     <nav className='flex justify-between items-center max-container'>
        <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={30} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map((link)=>(
                <li key={link.label}>
                    <a className='font-montserrat leading-normal text-lg text-slate-gray' href={link.href}>
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
        <span className='font-montserrat leading-snug text-lg max-lg:hidden flex'>Sign in / Explore now</span>
        <div className='lg:hidden block cursor-pointer'>
            <img onClick={()=>setOpen(prev=>!prev)} src={hamburger} alt="" width={25} height={25}/>
        </div>
     </nav>
     {open &&(     
     <div className='bg-gray-200 h-70 absolute right-16 flex flex-col p-16 items-center rounded-lg lg:hidden'>
              <ul className='space-y-6'>
         {navLinks.map((link)=>(
             <li key={link.label}>
                 <a className='font-montserrat leading-normal text-lg text-black underline underline-offset-7' href={link.href}>
                     {link.label}
                 </a>
             </li>
         ))}
     </ul>
         </div>
     )}
    </header>
  )
}

export default Nav