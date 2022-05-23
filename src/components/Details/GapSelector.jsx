function GapSelector({ gap, handler, loading }) {
  const handleClick = (e) => {
    handler(e.target.name);
  };

  return (
    <div className="sticky z-10 transition-colors duration-500 rounded-b-lg backdrop-blur md:static top-14 lg:col-span-2 lg:row-start-2 bg-white/75 dark:bg-neutral-900/75">
      <div className="flex justify-center w-full">
        {[
          ["1d", "Dia"],
          ["1w", "Semana"],
          ["1m", "Mes"],
        ].map(([abbr, text]) => (
          <button
            className={`grow lg:grow-0 bg-emerald-300 disabled:cursor-wait rounded-md px-2 py-1 py-none m-2 outline-none transition-colors hover:bg-emerald-400 dark:text-gray-800 ${
              abbr === gap
                ? "bg-emerald-600 text-white dark:text-neutral-100 ring-2 ring-emerald-500"
                : ""
            }`}
            disabled={loading}
            key={text}
            name={abbr}
            onClick={handleClick}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GapSelector;
