export type WriterCategory =
  | "story"
  | "characters"
  | "quests"
  | "dialogue"
  | "items"
  | "skills"

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