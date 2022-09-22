import { NavLink } from "react-router-dom";

const TopNavigation = () => {

  return (
    <>
      <div className="topnavigation box-shadow--accent-1 ">
        <NavLink to="/">
          <i className="icon icon-clipboard"></i>
          <h5>Overview</h5>
        </NavLink>

        <NavLink to="/details">
          <i className="icon icon-user"></i>
          <h5>Account</h5>
        </NavLink>

        <NavLink to="/payment">
          <i className="icon icon-credit-card"></i>
          <h5>Payment</h5>
        </NavLink>

        <NavLink to="/history">
          <i className="icon icon-clock"></i>
          <h5>History</h5>
        </NavLink>
      </div>
    </>
  );
};

export default TopNavigation;
