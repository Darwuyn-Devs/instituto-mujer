export function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  onClick,
  ...rest
}) {
  const base =
    "btn inline-block px-6 py-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-200 ease-in-out";

  const sizeClass = {
    sm: "text-sm py-1 px-3",
    md: "text-base py-2 px-4",
    lg: "text-lg py-3 px-6",
  }[size];

  const variantClass =
    variant === "secondary"
      ? "btn-secondary"
      : ""; // Primary already styled by .btn

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variantClass} ${sizeClass}`}
      {...rest}
    >
      {children}
    </button>
  );
}
