function ButtonNav({ children, onClick }) {
  return (
    <button
      className="md:hidden bg-white p-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default ButtonNav;
