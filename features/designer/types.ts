export type DesignerCategory =
  | 'game-concept'
  | 'core-gameplay'
  | 'combat-system'
  | 'character-progression'
  | 'level-design'
  | 'economy-system'
  | 'boss-design'

export interface DesignerCategoryItem {
  id: DesignerCategory
  label: string
  description: string
}

export interface GeneratedDesign {
  title: string
  sections: {
    heading: string
    body: string
  }[]
}

export interface DesignerHistoryEntry {
  id: string
  timestamp: number
  category: DesignerCategory
  prompt: string
  result: GeneratedDesign
  projectId?: string
}

export interface ProjectContext {
  name: string
  gameType: string
  worldDescription: string
  style: string
}
