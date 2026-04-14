import React from 'react';
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router';
import { RiHome2Line, RiTimeLine } from 'react-icons/ri';
import { ImStatsDots } from 'react-icons/im';

const Navbar = () => {
    return (
        <div className='shadow-sm py-5'>
            <div className='container mx-auto flex justify-between'>
                <div>
                    <img src={logo} alt="This is a navbar icon or logo" />
                </div>

                <div className='flex gap-5'>
                    <NavLink
                        to={'/'}
                        className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${isActive ? 'bg-[#244D3F] text-white' : ''}`}
                        ><RiHome2Line /> Home
                    </NavLink>

                    <NavLink
                        to={'/timeline'}
                        className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${isActive ? 'bg-[#244D3F] text-white' : ''}`}
                        ><RiTimeLine /> Timeline
                    </NavLink>

                    <NavLink
                        to={'/stats'}
                        className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${isActive ? 'bg-[#244D3F] text-white' : ''}`}
                        ><ImStatsDots /> Stats
                    </NavLink>

                </div>

            </div>
        </div>
    );
};

export default Navbar;