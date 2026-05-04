type HeroProp = {
  children: React.ReactNode;
};
export default function Hero({ children }: HeroProp) {
  return (
    <span
      className="flex flex-col items-center justify-center 
text-center px-5 py-12 lg:py-20 bg-white rounded-lg  shadow-lg"
    >
      {children}
    </span>
  );
}
