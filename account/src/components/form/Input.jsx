const Input = ({ inputLabel, placeholder, value, setState }) => {
  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="form__input">
      <label className="form__label">
        {inputLabel}
      </label>{" "}
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Input;
