export type AssetCategory =
  | "character"
  | "environment"
  | "weapon"
  | "item"
  | "creature"
  | "ui"
  | "icon"

export interface AssetCategoryItem {
  id: AssetCategory
  label: string
  description: string
}

export interface GeneratedAsset {
  title: string
  sections: {
    heading: string
    body: string
  }[]
}

export interface AssetHistoryEntry {
  id: string
  timestamp: number
  category: AssetCategory
  prompt: string
  result: GeneratedAsset
  projectId?: string
}
