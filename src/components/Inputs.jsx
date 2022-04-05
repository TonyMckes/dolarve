import { useOutletContext } from "react-router-dom";

function Inputs() {
  const { curInput, setCurInput } = useOutletContext();
  const { value, code } = curInput;

  return (
    <div className="fixed bottom-0 left-0 w-full px-4 py-2 text-center bg-gray-400 border rounded-t-lg drop-shadow lg:sticky lg:rounded-lg lg:top-20">
      <select
        onChange={(e) =>
          setCurInput({ ...curInput, inputCode: e.target.value })
        }
      >
        <option value="VES">US$</option>
        <option value="USD">Bs.</option>
      </select>

      <label>
        {code === "VES" ? "> $" : "> Bs."}
        &gt;
        <input
          type="number"
          step="0.01"
          placeholder="Calculadora"
          value={value}
          onChange={(e) =>
            setCurInput({ ...curInput, inputValue: e.target.value })
          }
        />
      </label>
    </div>
  );
}

export default Inputs;
