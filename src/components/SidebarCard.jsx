function SidebarCard({ title, children }) {
  return (
    <div className="px-4 py-2 space-y-2 border rounded-md border-neutral-450">
      <h3 className="font-bold">{title}</h3>
      {children}
    </div>
  );
}

export default SidebarCard;
