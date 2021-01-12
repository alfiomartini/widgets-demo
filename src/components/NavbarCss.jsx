import React from 'react';
import Link from './Link';

import './css/NavbarCss.css';
const NavbarCss = ({options, basePath}) => {
  
  const menuList = options.map((item, index) => {
    return (
      <li key={index}
      > 
        <Link href={basePath + item.path}
        >
          {item.option}
        </Link>
      </li>
    )
  });
  console.log('menu list', menuList.length)
  return(
    <ul className='menu-list'>
      {menuList}
    </ul>
  )
}

export default NavbarCss;