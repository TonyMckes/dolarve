import { ImSpinner } from "react-icons/im";

export default function LoadingSpinner({ loading }) {
  return (
    loading && (
      <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-25 dark:bg-opacity-50">
        <ImSpinner className="w-12 h-12 animate-spin " />
      </div>
    )
  );
}
