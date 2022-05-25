function Button({ disabled, icon, onClick, text }) {
  return (
    <button
      className="px-2 py-1 font-medium text-left disabled:cursor-not-allowed disabled:opacity-50 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-700 ring-1 ring-neutral-450 "
      disabled={disabled}
      onClick={onClick}
    >
      {icon} <span className="">{text}</span>
    </button>
  );
}

export default Button;
