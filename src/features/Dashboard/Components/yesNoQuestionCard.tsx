import { getYesnoStats } from "../utils/dashboard.logic";
import { Badge } from "../../../components/ui/Badge";

export const YesNoQuestionCard = ()=>{
    const value = getYesnoStats();
    console.log("the value in Yesno is ",value); /* 
    op-->
    [
  {
    questionId: 'q4',
    label: 'Would you recommend this session to others?',
    bucket: { Yes: 5, No: 1 },
    total: 6
  }
]
    */


return (
  <div style={{ background: "#e4f0b0", padding: "20px" }}>
    <Badge type="yesno">Yes-No</Badge>

    {value.map((q) => {
      const yesCount = q.bucket.Yes;
      const noCount = q.bucket.No;

      const yesPercent = q.total === 0 ? 0 : (yesCount / q.total) * 100;
      const noPercent = q.total === 0 ? 0 : (noCount / q.total) * 100;

      return (
        <div key={q.questionId} style={{ marginBottom: "20px" }}>
          <h4>{q.label}</h4>
          <span>{q.total} answers</span>

          {/* BARCHART */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "10px",
            }}
          >
            {/* YES BOX */}
            <div
              style={{
                flex: 1,
                background: "#84ffbf",
                padding: "12px",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <div style={{ fontWeight: "600" }}>Yes</div>
              <div style={{ fontSize: "20px", fontWeight: "700" }}>
                {yesPercent.toFixed(1)}%
              </div>
              <div>{yesCount} votes</div>
            </div>

            {/* NO BOX */}
            <div
              style={{
                flex: 1,
                background: "#f9a8a8",
                padding: "12px",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <div style={{ fontWeight: "600" }}>No</div>
              <div style={{ fontSize: "20px", fontWeight: "700" }}>
                {noPercent.toFixed(1)}%
              </div>
              <div>{noCount} votes</div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

}