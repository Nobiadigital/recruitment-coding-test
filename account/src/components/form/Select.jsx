const Select = ({ dropdownLabel, selectPlaceholder }) => {
  const options = ["option 1", "option 2", "option 3"];

  return (
    <div className="form__select">
      <div className="grid__inner grid__inner--collapsed">
        <div className="col--6">
          <label className="ts-control" id="dropdown-ts-label">
            {dropdownLabel}
          </label>
        </div>
        <div className="col--6">
          <p className="p--small form__label--optional" id="dropdown-ts-label">
            (Optional)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Select;
