export default function SidebarCard({ title, children }) {
  return (
    <div className="p-4 mx-4 space-y-2 border rounded-md dark:border-neutral-700 ">
      <h3 className="font-bold">{title}</h3>
      {children}
    </div>
  );
}
