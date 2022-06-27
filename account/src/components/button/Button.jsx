const Button = ({
  text,
  align,
  alignIcon,
  color,
  onClick,
  disabled,
  icon,
  variant,
  size,
  href,
  ...props
}) => {
  const Element = "a";

  const classes =
    (variant ? ` ${"button__" + variant}` : "") +
    (align ? ` ${"button--" + align}` : "") +
    (color ? ` ${"button--" + color}` : "") +
    (size ? ` ${"button--" + size}` : "") +
    (disabled ? ` ${"button--disabled"}` : "") +
    (icon ? ` ${"button__icon"}` : "") +
    (alignIcon ? ` ${"button__icon--" + alignIcon}` : "");

  return (
    <Element
      href={href}
      className={`button ${classes}`}
      onClick={onClick}
      name={text}
      {...props}
    >
      {icon && <i className={`icon ${icon}`}></i>}
      <span>{text}</span>
    </Element>
  );
};

export default Button;
