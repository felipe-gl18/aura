export interface FlowOption {
  label: string;
  next?: string;
  result?: string;
}

export interface FlowNode {
  question: string;
  options: FlowOption[];
}

export type FlowData = Record<string, FlowNode>;

export interface ResultNode {
  title: string;
  message: string;
}

export type ResultsData = Record<string, ResultNode>;

export interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  type: "question" | "answer" | "result";
  text: string;
  description?: string;
}
