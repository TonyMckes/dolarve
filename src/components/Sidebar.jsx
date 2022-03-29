export default function Sidebar({ children }) {
  return (
    <div className="row-span-2 row-start-1 sticky top-0 hidden col-start-3 h-screen py-4 space-y-4 md:flex md:flex-col ">
      {children}
    </div>
  );
}
