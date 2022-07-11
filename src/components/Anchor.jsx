import { Link } from "react-router-dom";

function Anchor({ href = "", icon, state = null, text }) {
  return (
    <Link
      className="px-2 py-1 text-sm font-medium tracking-tighter rounded-xl whitespace-nowrap hover:bg-neutral-100 dark:hover:bg-neutral-700 ring-1 ring-neutral-450"
      state={state}
      to={href}
    >
      {icon} {text}
    </Link>
  );
}

export default Anchor;
