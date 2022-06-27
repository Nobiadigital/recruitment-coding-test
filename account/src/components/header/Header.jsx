import AccountStatus from "../account-status/AccountStatus";

const Header = (props) => {
  return (
    <header className="account-header">
      <div className="grid__inner grid__inner--collapsed">
        <div className="account-header__content col--lg--7 col--12">
          <h2>{props.title}</h2>
          <p>{props.preamble}</p>
        </div>
        <div className="account-header__status col--lg--5 col--12">
          <AccountStatus status="Active" />
        </div>
      </div>
    </header>
  );
};

export default Header;
