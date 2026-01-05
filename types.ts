
export enum Category {
  Comparison = "Comparison & Similarity",
  Sound = "Sound & Rhythm",
  Emphasis = "Emphasis & Exaggeration",
  Indirect = "Indirect & Contradiction",
  Structural = "Structure & Repetition"
}

export interface Example {
  text: string;
  source: string;
  type: "Literature" | "Everyday" | "Classic";
  explanation?: string; // Exhaustive breakdown of the device in action
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface LiteraryDevice {
  id: string;
  name: string;
  pronunciation: string;
  category: Category;
  shortDefinition: string;
  longDefinition: string;
  imageUrl: string;
  examples: Example[];
  nuances: string[];
  proTips: string[];
  quiz: QuizQuestion[];
  accentColor: string;
}
