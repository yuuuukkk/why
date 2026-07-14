export type WriterCategory =
  | "story"
  | "dialogue"
  | "quest"
  | "character"
  | "item"
  | "skill"

export interface CategoryItem {
  id: string
  label: string
  category: WriterCategory
}

export interface GeneratedContent {
  title: string
  sections: {
    heading: string
    body: string
  }[]
}

export interface MockPrompt {
  label: string
  text: string
}

export interface HistoryEntry {
  id: string
  timestamp: number
  category: WriterCategory
  prompt: string
  result: GeneratedContent
}