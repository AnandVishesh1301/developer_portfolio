import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style';
import { navLinks } from '../constants';
import { vlogo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    // py specifies the padding for both top and bottom
    //z is to place the navbar above the pther eleemnts on the webpage
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      {/* justify between is to slogn the elements along the containers main axis equidistantly */}
      {/* mx for horizontal margin i.e on left and right
      Similarly my on the vertical and simple m for overall margin */}

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={vlogo} alt='logo' className='w-9 h-9 object-contain'></img>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Vishesh Anand &nbsp;
            <span className='sm:block hidden'> | Developer Portfolio</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${active === Link.title
                ? "text-white"
                : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}

        </ul>
        {/* Below part is to adjust the navbar links to a menu for small devices */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          {/* If you click on the X option(menu), then the set toggle changes toggle to ttrue, and if it's true then we show the same option in Navbar via <ul> */}
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex flex-col justify-end items-start gap-4'>
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${active === Link.title
                    ? "text-white"
                    : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar