import {
  findQuestion,
  findAnswer,
  calculateAverage,
  calculateDistribution,
  findMostAnswered,
} from "../utils/dashboard.logic";
// import style from "../../../styles/dashboard/RatingQuestionCard.moudle.css";
import { Badge } from "../../../components/ui/Badge";

type Props = {
  id: string;
};

export const RatingQuestionCard = ({ id }: Props) => {
  const label = findQuestion(id);
  const answers = findAnswer(id);

  const values = answers.map((ans) => ans.value);
  console.log("value is ",values);

  const avg = calculateAverage(values);
  const rate = calculateDistribution(values);
  //   console.log("The rate is", rate); //o/p eg. { 1: 3, 2: 5, 3: 2, 4: 5, 5: 1 }

  const mostAns = findMostAnswered(rate);
  //   console.log("The mostAns is", mostAns);

  const totaleVotes = Object.values(rate).reduce((acc, curr) => acc + curr, 0);
  //   console.log("the totaleVote is", totaleVotes);

  return (
    <div style={{background:"#d0e4f2", padding:"20px"}}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Badge type="rating">Rating 1-5</Badge>
        <span style={{ color: "#494242" }}>{totaleVotes} answers</span>
      </div>
      <h2>{label}</h2>
      {/* BAR_CHART */}
      <div>
        {[1, 2, 3, 4, 5].map((item) => {
          const count = rate[item] || 0;
          const percentage =
            totaleVotes === 0 ? 0 : (count / totaleVotes) * 100;
          return (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "6px",
              }}
            >
              <span style={{ width: "20px" }}>{item}</span>

              <div
                style={{
                  //   flex: 1,
                  width: "40%",
                  height: "7px",
                  background: "#d6d1d1",
                  borderRadius: "6px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${percentage}%`,
                    height: "100%",
                    background: item === mostAns[0] ? "#deb44a" : "#60a5fa", // highlight most ans
                    transition: "width 0.3s ease",
                  }}
                ></div>
              </div>
              <span style={{ width: "20px", textAlign: "right" }}>{count}</span>
            </div>
          );
        })}
      </div>
  <div style={{ marginTop: "10px" }}>
    <span>Average: {avg}</span> 
    {" "}
    <span>Most answered: {mostAns.join(", ")}</span>
  </div>
    </div>
  );
};
