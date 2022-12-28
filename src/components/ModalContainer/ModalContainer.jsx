import { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ImSpinner } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function ModalContainer({ children, isLoading }) {
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
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50"
      onClick={handleClick}
    >
      {isLoading ? (
        <ImSpinner className="text-white !w-14 !h-14 animate-spin" />
      ) : (
        <div className="relative w-10/12 overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800 md:max-w-md">
          <button
            className="absolute duration-200 outline-none top-3 right-3 hover:text-red-500 hover:scale-110"
            onClick={handleClick}
          >
            <AiOutlineCloseCircle className="w-6 h-6" pointerEvents="none" />
          </button>
          {children}
        </div>
      )}
    </div>
  );
}

export default ModalContainer;
