import { MdClose, MdMenu } from "react-icons/md";

function SidebarToggler({ handler, sidebar }) {
  return (
    <button
      className="fixed top-0 z-50 block outline-none md:hidden"
      onClick={handler}
    >
      {sidebar ? (
        <MdClose className="w-8 h-8 m-3 " />
      ) : (
        <MdMenu className="w-8 h-8 m-3 " />
      )}
    </button>
  );
}

export default SidebarToggler;
