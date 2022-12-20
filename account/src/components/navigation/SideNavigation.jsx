import { NavLink } from "react-router-dom";
import { useState } from "react";
import burgerMenuIcon from "../../static/burger.svg";

const SideNavigation = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const openSideNavigation = () => {
    setOpenMenu(true); 
  }
  const closeSideNavigation = () => {
    setOpenMenu(false); 
  }

  return (
    <>
      <div className="burgermenuicon" onClick={openSideNavigation}>
        <img src={burgerMenuIcon} className="burgermenuicon__img" />
      </div>
      <aside className={`col sidenavigation ${openMenu ? 'sidenavigation--open' : ''}`}>
        <div className="sidenavigation__closemenu" onClick={closeSideNavigation}>
          <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" className="close-x" viewBox="0 0 24 24" 
          >
            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 
            20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 
            20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/>
          </svg>
        </div>
        <NavLink to="/" onClick={closeSideNavigation}>
          <i className="icon icon-clipboard"></i>
          <h5>Overview</h5>
        </NavLink>

        <NavLink to="/details" onClick={closeSideNavigation}>
          <i className="icon icon-user"></i>
          <h5>Account details</h5>
        </NavLink>

        <NavLink to="/payment" onClick={closeSideNavigation}>
          <i className="icon icon-credit-card"></i>
          <h5>Payment</h5>
        </NavLink>

        <NavLink to="/history" onClick={closeSideNavigation}>
          <i className="icon icon-clock"></i>
          <h5>History</h5>
        </NavLink>
      </aside>
    </>
  );
};

export default SideNavigation;
