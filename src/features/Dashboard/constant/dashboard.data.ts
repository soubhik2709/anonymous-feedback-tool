// Mock data:
export const mockForm = {
  _id: "form_001",
  title: "Team feedback — Q2 2025",
  description: "Share your honest thoughts about this quarter.",
  shareToken: "x7k2p",
  creatorId: "user_001",
  isActive: true,
  emailNotifications: false,
  createdAt: "2025-04-11T09:00:00.000Z",
  questions: [
    {
      id: "q1",
      type: "text",
      label: "What did you think about the session overall?",
      required: true,
    },
    {
      id: "q2",
      type: "rating",
      label: "How would you rate the difficulty level?",
      required: false,
      scale: 5,
    },
    {
      id: "q3",
      type: "multiple_choice",
      label: "Which topic was most useful to you?",
      required: true,
      options: ["React basics", "TypeScript", "API integration", "CSS layout"],
    },
    {
      id: "q4",
      type: "yes_no",
      label: "Would you recommend this session to others?",
      required: false,
    },
  ],
};


export const mockResponses = [
  {
    _id: "resp_001",
    formId: "form_001",
    submittedAt: "2025-04-14T08:22:00.000Z",
    completed: true,
    answers: [
      {
        questionId: "q1",
        type: "text",
        value: "Really enjoyed the pace. Examples made complex topics easy.",
      },
      {
        questionId: "q2",
        type: "rating",
        value: 4,
      },
      {
        questionId: "q3",
        type: "multiple_choice",
        value: "React basics",
      },
      {
        questionId: "q4",
        type: "yes_no",
        value: "Yes",
      },
    ],
  },
  {
    _id: "resp_002",
    formId: "form_001",
    submittedAt: "2025-04-14T09:45:00.000Z",
    completed: true,
    answers: [
      {
        questionId: "q1",
        type: "text",
        value: "Could have been shorter. Some sections felt repetitive.",
      },
      {
        questionId: "q2",
        type: "rating",
        value: 3,
      },
      {
        questionId: "q3",
        type: "multiple_choice",
        value: "TypeScript",
      },
      {
        questionId: "q4",
        type: "yes_no",
        value: "No",
      },
    ],
  },
  {
    _id: "resp_003",
    formId: "form_001",
    submittedAt: "2025-04-13T14:10:00.000Z",
    completed: true,
    answers: [
      {
        questionId: "q1",
        type: "text",
        value: "Great content. Would love more hands-on exercises.",
      },
      {
        questionId: "q2",
        type: "rating",
        value: 5,
      },
      {
        questionId: "q3",
        type: "multiple_choice",
        value: "API integration",
      },
      {
        questionId: "q4",
        type: "yes_no",
        value: "Yes",
      },
    ],
  },
  {
    _id: "resp_004",
    formId: "form_001",
    submittedAt: "2025-04-13T16:30:00.000Z",
    completed: false,
    answers: [
      {
        questionId: "q1",
        type: "text",
        value: "Informative but a bit fast for beginners.",
      },
      {
        questionId: "q2",
        type: "rating",
        value: 4,
      },
    ],
  },
  {
    _id: "resp_005",
    formId: "form_001",
    submittedAt: "2025-04-12T11:00:00.000Z",
    completed: true,
    answers: [
      {
        questionId: "q1",
        type: "text",
        value: "Loved the TypeScript section. Very practical.",
      },
      {
        questionId: "q2",
        type: "rating",
        value: 5,
      },
      {
        questionId: "q3",
        type: "multiple_choice",
        value: "TypeScript",
      },
      {
        questionId: "q4",
        type: "yes_no",
        value: "Yes",
      },
    ],
  },
  {
    _id: "resp_006",
    formId: "form_001",
    submittedAt: "2025-04-12T13:15:00.000Z",
    completed: true,
    answers: [
      {
        questionId: "q1",
        type: "text",
        value: "Good session overall. The CSS part needs more depth.",
      },
      {
        questionId: "q2",
        type: "rating",
        value: 3,
      },
      {
        questionId: "q3",
        type: "multiple_choice",
        value: "CSS layout",
      },
      {
        questionId: "q4",
        type: "yes_no",
        value: "Yes",
      },
    ],
  },
  {
    _id: "resp_007",
    formId: "form_001",
    submittedAt: "2025-04-11T17:45:00.000Z",
    completed: true,
    answers: [
      {
        questionId: "q1",
        type: "text",
        value: "Very well structured. Appreciated the Q&A at the end.",
      },
      {
        questionId: "q2",
        type: "rating",
        value: 4,
      },
      {
        questionId: "q3",
        type: "multiple_choice",
        value: "React basics",
      },
      {
        questionId: "q4",
        type: "yes_no",
        value: "Yes",
      },
    ],
  },
  {
    _id: "resp_008",
    formId: "form_001",
    submittedAt: "2025-04-11T10:20:00.000Z",
    completed: false,
    answers: [
      {
        questionId: "q2",
        type: "rating",
        value: 2,
      },
    ],
  },
];


export const mockStats = {
  totalResponses: 8,
  completedResponses: 6,
  totalViews: 21,
  completionRate: 75,
  conversionRate: 38,
  averageRating: 4.0,
  newToday: 2,
  activityByDay: [
    { day: "Mon", count: 0 },
    { day: "Tue", count: 2 },
    { day: "Wed", count: 3 },
    { day: "Thu", count: 0 },
    { day: "Fri", count: 2 },
    { day: "Sat", count: 1 },
    { day: "Sun", count: 0 },
  ],
};