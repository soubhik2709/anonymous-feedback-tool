export type QuestionType = "text" | "rating" | "multiple_choice" | "yes_no";

export interface IQuestion {
  id: string | number;
  type: QuestionType;
  label: string;
  required?: boolean;
  options?: string[]; // for MCQ
}

export interface IForm {
  id: string;
  title: string;
  description: string;
  questions: IQuestion[];
}
//why use interface not type?