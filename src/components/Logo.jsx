export function Logo({ icon, name }) {
  return (
    <img
      className="inline-block m-2 rounded-full w-14 drop-shadow-md"
      src={icon}
      alt={name}
    />
  );
}
