import { useAuthContext } from "context/AuthContext";
import NightModeToggler from "./NightModeToggler";

function ProfileInfo() {
  const { authState } = useAuthContext();
  const { displayName, email, photoURL } = authState || {};

  const handleOnError = (e) => {
    e.target.classList.add("hidden");
  };

  return (
    <div className="flex items-center px-2 py-1 select-none rounded-3xl whitespace-nowrap">
      {photoURL && (
        <img
          alt={displayName}
          className="w-10 h-10 rounded-full"
          onError={handleOnError}
          referrerPolicy="no-referrer"
          src={photoURL}
        />
      )}
      <div className="mx-1 overflow-hidden grow">
        <div className="text-sm font-semibold tracking-tighter truncate ">
          {displayName}
        </div>
        <div className="text-xs tracking-tighter truncate ">{email}</div>
      </div>
      <NightModeToggler />
    </div>
  );
}

export default ProfileInfo;
