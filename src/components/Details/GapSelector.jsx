import axios from "axios";
import { useState } from "react";

export default function GapSelector({ details, setDetails, slug }) {
  const [selectedGap, setSelectedGap] = useState("w");

  const handleWeek = async (gap) => {
    const res = await axios.get(
      `https://exchange.vcoud.com/coins/${slug}?gap=1${gap}&base=usd`,
    );

    setDetails({ ...details, prices: res.data.prices });
    setSelectedGap(gap);
  };

  return (
    <div className="lg:col-span-2 lg:row-start-2">
      <div className="flex justify-center ">
        {[
          ["d", "Dia"],
          ["w", "Semana"],
          ["m", "Mes"],
        ].map(([abbr, text], i) => (
          <button
            className={`bg-emerald-300 rounded-md px-2 py-1 py-none m-2  outline-none transition-colors hover:bg-emerald-400 dark:text-gray-800 ${
              abbr === selectedGap ? "bg-emerald-500 text-white " : ""
            }`}
            key={i}
            name={abbr}
            onClick={(e) => handleWeek(e.target.name)}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}
