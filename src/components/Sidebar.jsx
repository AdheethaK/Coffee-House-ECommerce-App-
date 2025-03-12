import React from 'react'
import { Link , NavLink } from 'react-router-dom'

import { links } from '../data/my-dummy'
import logo from '../data/CoffeeHouseLogo.jpg'

const Sidebar = () => {
    return(
        <div className='' >
            <div className='w-full h-32' >
                <div className='w-full h-16 mt-2' >
                    <Link to="/" className='flex flex-row' >
                        <img src={logo} className='basis-1/4 w-16 h-auto rounded-full' />
                        <div className='basis-3/4 flex flex-col mt-2 pl-2' >
                            <div className='font-bold' style={{ letterSpacing : '0.2rem' }} >
                                Coffee House
                            </div>
                            <div className='text-sm' style={{ letterSpacing : '0.2rem' }} >
                                Coffee please :)
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='w-full ml-2' >
                {links.map((item)=>(
                    <div key={item.title} className='justify-between' >
                        {item.links.map((link)=>(
                            <NavLink className='flex flex-row my-3' to={`/${link.name}`} onClick={()=>{}} style={{ color : '#343434' }} >
                                <div className='w-6 h-auto basis-1/6 place-items-end place-content-center'>
                                    {link.icon}
                                </div>
                                <p className='basis-5/6 ml-3 px-1 py-2 uppercase font-medium' style={{ letterSpacing : '0.2rem' }} >{link.name}</p>
                            </NavLink>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar