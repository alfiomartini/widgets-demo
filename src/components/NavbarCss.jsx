import React from 'react';
import Link from './Link';

import './css/NavbarCss.css';
const NavbarCss = ({options, basePath}) => {

  const menuList = options.map((item, index) => {
    return (
      <li key={index}
      > 
        <Link href={basePath + item.path}
        className={`${window.location.pathname=== basePath+item.path?'active':''}`}
        >
          {item.option}
        </Link>
      </li>
    )
  })
  return(
    <ul className='menu-list'>
      {menuList}
    </ul>
  )
}

export default NavbarCss;