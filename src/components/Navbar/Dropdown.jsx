import React, { useEffect, useState } from 'react';
import { NavDropdown } from 'react-bootstrap';

const Dropdown = ({ children, title }) => {
  const [isMobile, setIsMobile] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
   if (window || isMobile) {
      setIsMobile(window.innerWidth < 992);
   }
  }, []);

  return (
    <NavDropdown
      title={title}
      id="basic-nav-dropdown"
      onMouseEnter={() => isMobile || setIsHovered(true)}
      onMouseLeave={() => isMobile || setIsHovered(false)}
      onToggle={() => isMobile && setIsClicked(!isClicked)}
      show={isClicked || isHovered}>
      {
        children
      }
    </NavDropdown>
  );
};

export default Dropdown;
