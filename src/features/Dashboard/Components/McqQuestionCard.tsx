import { getMcqStats } from "../utils/dashboard.logic";
import { Badge } from "../../../components/ui/Badge";

export const McqQuestionCard = () => {
  const value = getMcqStats();

  console.log("the value is", value); /* op-->
[
  {
    questionId: 'q3',
    label: 'Which topic was most useful to you?',
    bucket: {
      'React basics': 2,
      TpyeScript: 0,
      'API integration': 1,
      'CSS layout': 1
    },
    total: 4
  }
] */

  return (
    <div style={{ background: "#e0f2d0", padding: "20px" }}>
      <Badge type="mcq">Multiple_choice</Badge>

      {value.map((q) => (
        <div>
          <h4>{q.label}</h4>
          <span>{q.total} answers</span>

          {/* BAR CHART */}

          {Object.entries(q.bucket).map(([item, count]) => {
            //using bucket values
            const percentage = q.total === 0 ? 0 : (count / q.total) * 100;

            // find the most answer
            const mostAns = Object.entries(q.bucket).reduce(
              (max, [option, count]) => {
                if (count > max.count) {
                  return { option, count };
                }
                return max;
              },
              { option: "", count: -1 },
            );

            return (
              <div key={item}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "8px",
                    padding: "6px 0",
                  }}
                >
                  <span style={{ fontWeight: "600", fontSize: "14px" }}>
                    {item}
                  </span>
                  <span
                    style={{
                      fontWeight: "500",
                      color: "#444",
                      display: "flex",
                      gap: "6px",
                    }}
                  >
                    <span> {count}</span>
                    <span>({percentage.toFixed(2)}%)</span>
                  </span>
                </div>
                <div
                  style={{
                    height: "8px",
                    background: "#ccc",
                    borderRadius: "4px",
                  }}
                >
                  <div
                    style={{
                      width: `${percentage}%`,
                      height: "100%",
                      background: mostAns ? "#deb44a" : "#60a5fa", // highlight most ans
                      transition: "width 0.3s ease",
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
