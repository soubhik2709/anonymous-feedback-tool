type BadgeProps = {
  children: React.ReactNode;
  type: "mcq" | "yesno" | "text" | "rating";
};

export const Badge = ({ children, type }: BadgeProps) => {
  const base = "px-3  py-1 rounded-xl text-xs font-medium my-2 ";

  const variants = {
    mcq: "bg-sky-100 text-sky-700",
    yesno: "bg-green-100 text-green-700",
    text: "bg-gray-100 text-gray-700",
    rating: "bg-amber-100 text-amber-700",
  };

  return (
    <span className={`${base} ${variants[type]}`}>
      {children}
    </span>
  );
};