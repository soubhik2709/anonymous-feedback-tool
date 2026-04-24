import { getMcqStats } from "../utils/dashboard.logic";
import { Badge } from "../../../components/ui/Badge";

export const McqQuestionCard = () => {
  const value = getMcqStats();

  // console.log("the value is", value);
   /* op-->
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
  <div style={{ background: "#d0d2f2", padding: "20px" }}>
    <Badge type="mcq">Multiple_choice</Badge>

    {value.map((q) => {
      const entries = Object.entries(q.bucket);

      // ✅ find most answered ONCE (not inside loop)
      const mostAns = entries.reduce(
        (max, [option, count]) => {
          if (count > max.count) {
            return { option, count };
          }
          return max;
        },
        { option: "", count: -1 }
      );

      return (
        <div key={q.questionId} style={{ marginTop: "20px" }}>
          <h4>{q.label}</h4>
          <span>{q.total} answers</span>

          {/* VERTICAL BAR CHART */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "20px",
              height: "180px",
              marginTop: "15px",
              // border:"2px solid grey"

            }}
          >
            {entries.map(([item, count]) => {
              const percentage =
                q.total === 0 ? 0 : (count / q.total) * 100;

              const isMost = item === mostAns.option;//what is this?

              return (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    height: "100%",
                  }}
                >
                  {/* VALUE */}
                  <span style={{ fontSize: "15px", marginBottom: "6px", fontWeight:"bold" }}>
                    {count}
                  </span>

                  {/* BAR */}
                  <div
                    style={{
                      width: "35px",
                      height: `${percentage}%`,
                      background: isMost ? "#e7cf47" : "#60a5fa",
                      borderRadius: "6px",
                      transition: "height 0.3s ease",
                      border:"2px solid "
                    }}
                  />

                  {/* LABEL */}
                  <span
                    style={{
                      marginTop: "8px",
                      fontSize: "15px",
                      textAlign: "center",
                      fontWeight:"bold"
                    }}
                  >
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      );
    })}
  </div>
)
}