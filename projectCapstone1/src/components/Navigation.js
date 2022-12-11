import React, {useState} from "react";
import { NavLink } from "react-router-dom";
// import { FaBars } from 'react-icons/fa';

function Navigation() {
  const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="nav">
      <div className='nav-container-logo'>
					<NavLink to='/' className='logo'>
            CariRuko
					</NavLink>
				</div>

        <ul className={click ? 'navlist active' : 'navlist'} id='navlist'>
          <li className="navitems">
            <NavLink
              to='/home'
              activeclassname='active'
              className='nav-NavLinks'
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className="navitems">
            <NavLink
              to='/review'
              activeclassname='active'
              className='nav-NavLinks'
              onClick={handleClick}
            >
              Review
            </NavLink>
          </li>
          <li className="navitems">
            <NavLink
              to='/faq'
              activeclassname='active'
              className='nav-NavLinks'
              onClick={handleClick}
            >
              FAQ
            </NavLink>
          </li>
          <li className="navitems">
            <NavLink
              to='/contact'
              activeclassname='active'
              className='nav-NavLinks'
              onClick={handleClick}
            >
              Ruko
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
    );
}

export default Navigation;
