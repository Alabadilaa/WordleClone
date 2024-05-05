import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuItems from './menuItems';
import './Dropdown.css';

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className={click ? 'dropdown-menu active' : 'dropdown-menu'}>
      {menuItems.map((item, index) => (
        <Link
          key={index}
          className={item.className}
          to={item.path}
          onClick={() => setClick(false)}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Dropdown;
