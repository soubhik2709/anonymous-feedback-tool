type HeroProp = {
  children: React.ReactNode;
};
export default function Hero({ children }: HeroProp) {
  return (
    <span
      className="flex flex-col items-center justify-center 
text-center px-4 py-10 lg:py-24 bg-white rounded-lg  shadow-lg"
    >
      {children}
    </span>
  );
}
