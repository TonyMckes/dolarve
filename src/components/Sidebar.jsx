function Sidebar({ children }) {
  return (
    <div className="sticky top-0 hidden h-screen col-start-3 row-span-2 row-start-1 px-2 py-4 space-y-2 md:flex md:flex-col ">
      {children}
    </div>
  );
}

export default Sidebar;
