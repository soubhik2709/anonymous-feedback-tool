//MetricCard.tsx
type props = {
  // children:React.ReactNode;
  label: string;
  value: string | number;
};

export default function MetricCard({ label, value }: props) {
  return (
    <div
    className="p-3.5 m-1.5 min-h-[90px] bg-[#82daab] text-[#211f1f]  rounded-lg border-[#0b2c1a]"
    >
      <h4 className="m-0 text-xl font-semibold sm:text-xl md:text-xl lg:text-xs opacity-80 bg-[#82daab]">{label}</h4>
      <p className="mt-1 text-2xl font-bold bg-[#82daab]">{value}</p>
    </div>
  );
}
