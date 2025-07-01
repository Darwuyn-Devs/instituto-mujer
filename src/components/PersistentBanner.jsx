export function PersistentBanner({ type = "success", message = "La aplicación se cargó correctamente. ¡Bienvenido!" }) {
  const bgColors = {
    success: "bg-green-100 text-green-700 border-green-300",
    error: "bg-red-100 text-red-700 border-red-300",
    info: "bg-blue-100 text-blue-700 border-blue-300",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
  };

  return (
    <div
      className={`persistent-message border rounded-md p-4 text-center text-sm shadow-sm transition-all ${bgColors[type]}`}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
}
