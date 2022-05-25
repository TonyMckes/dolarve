function Button({ icon, onClick, text }) {
  return (
    <button
      className="px-2 py-1 font-medium rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700 ring-1 ring-neutral-450 "
      onClick={onClick}
    >
      {icon} <span className="">{text}</span>
    </button>
  );
}

export default Button;
