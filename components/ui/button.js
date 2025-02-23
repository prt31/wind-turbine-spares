export function Button({ children, className }) {
  return <button className={`bg-blue-500 text-white py-2 px-4 rounded ${className}`}>{children}</button>;
}
