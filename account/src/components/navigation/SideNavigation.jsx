import { NavLink } from "react-router-dom";

const SideNavigation = () => {

  return (
    <>
      <aside className="col col--3 sidenavigation">
        <NavLink to="/">
          <i className="icon icon-clipboard"></i>
          <h5>Overview</h5>
        </NavLink>

        <NavLink to="/details">
          <i className="icon icon-user"></i>
          <h5>Account details</h5>
        </NavLink>

        <NavLink to="/payment">
          <i className="icon icon-credit-card"></i>
          <h5>Payment</h5>
        </NavLink>

        <NavLink to="/history">
          <i className="icon icon-clock"></i>
          <h5>History</h5>
        </NavLink>
      </aside>
    </>
  );
};

export default SideNavigation;
