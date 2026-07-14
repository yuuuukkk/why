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
  projectId?: string
}

// ─── Project System ───

export interface Project {
  id: string
  name: string
  gameType: string
  worldDescription: string
  style: string
  createdAt: number
  updatedAt: number
}

export interface ProjectData {
  worldLore: GeneratedContent[]
  characters: GeneratedContent[]
  dialogues: GeneratedContent[]
  quests: GeneratedContent[]
  items: GeneratedContent[]
  skills: GeneratedContent[]
}

// ─── Generation Settings ───

export type CreativityLevel = "low" | "medium" | "high"
export type LengthLevel = "short" | "medium" | "long"
export type StylePreset = "fantasy" | "horror" | "sci-fi" | "realistic"

export interface GenerationSettings {
  creativity: CreativityLevel
  length: LengthLevel
  style: StylePreset
}

export const DEFAULT_SETTINGS: GenerationSettings = {
  creativity: "medium",
  length: "medium",
  style: "fantasy",
}