export function Logo({ layoutView, icon, name }) {
  return (
    <img
      className={`dark:border-gray-500 dark:border w-6 mx-auto rounded-full drop-shadow-md ${layoutView} text-xs`}
      src={icon}
      alt={name}
    />
  );
}
