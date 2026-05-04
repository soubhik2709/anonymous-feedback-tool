import { getYesnoStats } from "../utils/dashboard.logic";
import { Badge } from "./Badge";

export const YesNoQuestionCard = () => {
  const value = getYesnoStats();
  // console.log("the value in Yesno is ",value);
  /* 
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
    <div className="m-2 p-5 rounded-lg bg-[#e4f0b0]">
      {value.map((q) => {
        const yesCount = q.bucket.Yes;
        const noCount = q.bucket.No;

        const yesPercent = q.total === 0 ? 0 : (yesCount / q.total) * 100;
        const noPercent = q.total === 0 ? 0 : (noCount / q.total) * 100;

        return (
          <>
            <div className="flex justify-between">
              <Badge type="yesno">Yes-No</Badge>
              <h2>{q.total} answers</h2>
            </div>

            <div key={q.questionId} style={{ marginBottom: "20px" }}>
      <h2 className="font-semibold text-xl mb-3 ">{q.label}</h2>

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
          </>
        );
      })}
    </div>
  );
};
