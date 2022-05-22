import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ModalContainer({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "unset");
  }, []);

  const handleClick = (e) => {
    if (e.currentTarget !== e.target) return;

    navigate(-1);
  };

  return (
    <div
      className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-black/50"
      onClick={handleClick}
    >
      <div className="w-10/12 p-4 text-sm rounded-lg bg-neutral-100 dark:bg-neutral-800 md:max-w-md">
        <div className="flex flex-row-reverse mb-2">
          <button
            className="duration-200 outline-none hover:text-red-500 hover:scale-110"
            onClick={handleClick}
          >
            <AiOutlineCloseCircle className="w-6 h-6" pointerEvents="none" />
          </button>
        </div>
        <div className="border rounded-lg border-neutral-450">{children}</div>
      </div>
    </div>
  );
}

export default ModalContainer;
