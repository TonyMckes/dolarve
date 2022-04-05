export function Logo({ icon, name }) {
  return (
    <img
      className="w-6 mx-auto text-xs rounded-full dark:border-gray-500 dark:border drop-shadow-md"
      src={icon}
      alt={name}
    />
  );
}
