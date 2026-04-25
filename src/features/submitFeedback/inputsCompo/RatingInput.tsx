import { Star } from "lucide-react";
type RatingProps = {
  rating: number | null;
  onChange: (value: number|null) => void;
};

export default function RatingInput({ rating, onChange }: RatingProps) {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((r) => (
        <Star
          key={r} // r is current star.rating is what  user click :
          onClick={() => {
            if (rating === r) {
              onChange(null);
            } else {
              onChange(r);
            }
          }}
          className={`cursor-pointer ${r <= (rating ?? 0) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`}
        />
      ))}
    </div>
  );
}
