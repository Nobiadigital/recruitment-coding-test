const AccountStatus = (props) => {
  return (
    <div className="account-status-bar">
      <div className="account-status">
        <i className={`status status--` + props.status.toLowerCase()}></i>
        <span>Account status:</span>
        <em>{props.status}</em>
      </div>
    </div>
  );
};

export default AccountStatus;
