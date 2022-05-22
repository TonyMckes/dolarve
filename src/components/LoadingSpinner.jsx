import { useEffect } from "react";
import { ImSpinner } from "react-icons/im";

function LoadingSpinner({ loading }) {
  useEffect(() => {
    if (loading) document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "unset");
  }, [loading]);

  return (
    loading && (
      <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-black/50">
        <ImSpinner className="w-12 h-12 animate-spin" />
      </div>
    )
  );
}

export default LoadingSpinner;
