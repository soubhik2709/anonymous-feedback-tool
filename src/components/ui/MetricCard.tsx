//MetricCard.tsx
type props = {
  // children:React.ReactNode;
  label: string;
  value: string | number;
};

export default function MetricCard({ label, value }: props) {
  return (
    <div
      style={{
        padding: "5px",
        margin: "5px",
        minHeight: "90px",
        background: "#82daab",
        color: "#211f1f",
        borderRadius: "7px",
        border:"2px solid #1d5e3b"
      }}
    >
      <h4 style={{ margin: 0, fontSize: "12px", opacity: 0.8 }}>{label}</h4>
      <p style={{ margin: "5px 0 0", fontSize: "24px", fontWeight: "bold" }}>
        {value}
      </p>
    </div>
  );
}
