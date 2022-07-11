function Fieldset({ name, onChange, text, type, value, min }) {
  return (
    <fieldset>
      <label className="py-2">
        {text}
        <input
          className="block px-4 py-1 border rounded text-neutral-800 outline-gray-300 hover:bg-gray-50"
          minLength={min}
          name={name}
          onChange={onChange}
          required
          type={type}
          value={value}
        />
      </label>
    </fieldset>
  );
}

export default Fieldset;
