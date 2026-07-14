"use client"

import * as React from "react"
import type { Project, ProjectData, GenerationSettings, DEFAULT_SETTINGS } from "./types"

const PROJECTS_KEY = "why_projects"
const ACTIVE_PROJECT_KEY = "why_active_project_id"
const SETTINGS_KEY = "why_generation_settings"
const GAMEPLAY_DESIGN_KEY = "why_gameplay_design"
const ASSETS_KEY = "why_assets"

// ─── Projects ───

function loadProjects(): Project[] {
  if (typeof window === "undefined") return []
  try {
    const raw = localStorage.getItem(PROJECTS_KEY)
    return raw ? (JSON.parse(raw) as Project[]) : []
  } catch {
    return []
  }
}

function saveProjects(projects: Project[]) {
  if (typeof window === "undefined") return
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects))
}

export function createProject(
  name: string,
  gameType: string,
  worldDescription: string,
  style: string
): Project {
  const project: Project = {
    id: crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    name,
    gameType,
    worldDescription,
    style,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  }
  const existing = loadProjects()
  saveProjects([project, ...existing])
  setActiveProjectId(project.id)
  return project
}

export function getProjects(): Project[] {
  return loadProjects()
}

export function deleteProject(id: string) {
  const updated = loadProjects().filter((p) => p.id !== id)
  saveProjects(updated)
  const active = getActiveProjectId()
  if (active === id) {
    localStorage.removeItem(ACTIVE_PROJECT_KEY)
  }
}

export function updateProject(id: string, updates: Partial<Project>) {
  const updated = loadProjects().map((p) =>
    p.id === id ? { ...p, ...updates, updatedAt: Date.now() } : p
  )
  saveProjects(updated)
}

// ─── Active Project ───

export function getActiveProjectId(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem(ACTIVE_PROJECT_KEY)
}

export function setActiveProjectId(id: string | null) {
  if (typeof window === "undefined") return
  if (id) {
    localStorage.setItem(ACTIVE_PROJECT_KEY, id)
  } else {
    localStorage.removeItem(ACTIVE_PROJECT_KEY)
  }
}

// ─── Project Data ───

function getProjectDataKey(projectId: string): string {
  return `why_project_data_${projectId}`
}

export function loadProjectData(projectId: string): ProjectData {
  if (typeof window === "undefined") {
    return { worldLore: [], characters: [], dialogues: [], quests: [], items: [], skills: [] }
  }
  try {
    const raw = localStorage.getItem(getProjectDataKey(projectId))
    if (raw) return JSON.parse(raw) as ProjectData
  } catch { /* empty */ }
  return { worldLore: [], characters: [], dialogues: [], quests: [], items: [], skills: [] }
}

export function saveProjectData(projectId: string, data: ProjectData) {
  if (typeof window === "undefined") return
  localStorage.setItem(getProjectDataKey(projectId), JSON.stringify(data))
}

export function addToProjectData(
  projectId: string,
  category: "worldLore" | "characters" | "dialogues" | "quests" | "items" | "skills",
  content: { title: string; sections: { heading: string; body: string }[] }
) {
  const data = loadProjectData(projectId)
  data[category] = [content, ...data[category]].slice(0, 50)
  saveProjectData(projectId, data)
}

// ─── Generation Settings ───

export function loadSettings(): GenerationSettings {
  if (typeof window === "undefined") return { creativity: "medium", length: "medium", style: "fantasy" }
  try {
    const raw = localStorage.getItem(SETTINGS_KEY)
    if (raw) return JSON.parse(raw) as GenerationSettings
  } catch { /* empty */ }
  return { creativity: "medium", length: "medium", style: "fantasy" }
}

export function saveSettings(settings: GenerationSettings) {
  if (typeof window === "undefined") return
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
}

// ─── Gameplay Design ───

export interface GameplayDesignEntry {
  id: string
  timestamp: number
  category: string
  prompt: string
  result: { title: string; sections: { heading: string; body: string }[] }
}

function getGameplayDesignKey(projectId: string): string {
  return `${GAMEPLAY_DESIGN_KEY}_${projectId}`
}

export function loadGameplayDesign(projectId: string): GameplayDesignEntry[] {
  if (typeof window === "undefined") return []
  try {
    const raw = localStorage.getItem(getGameplayDesignKey(projectId))
    return raw ? (JSON.parse(raw) as GameplayDesignEntry[]) : []
  } catch {
    return []
  }
}

export function saveGameplayDesign(projectId: string, entries: GameplayDesignEntry[]) {
  if (typeof window === "undefined") return
  localStorage.setItem(getGameplayDesignKey(projectId), JSON.stringify(entries))
}

export function addGameplayDesign(
  projectId: string,
  category: string,
  prompt: string,
  result: { title: string; sections: { heading: string; body: string }[] }
): GameplayDesignEntry {
  const entry: GameplayDesignEntry = {
    id: crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    timestamp: Date.now(),
    category,
    prompt,
    result,
  }
  const existing = loadGameplayDesign(projectId)
  const updated = [entry, ...existing].slice(0, 50)
  saveGameplayDesign(projectId, updated)
  return entry
}

export function deleteGameplayDesign(projectId: string, id: string) {
  const updated = loadGameplayDesign(projectId).filter((e) => e.id !== id)
  saveGameplayDesign(projectId, updated)
}

export function clearGameplayDesign(projectId: string) {
  saveGameplayDesign(projectId, [])
}

export function useGameplayDesign(projectId: string | null) {
  const [entries, setEntries] = React.useState<GameplayDesignEntry[]>([])

  React.useEffect(() => {
    if (projectId) {
      setEntries(loadGameplayDesign(projectId))
    } else {
      setEntries([])
    }
  }, [projectId])

  const add = React.useCallback(
    (category: string, prompt: string, result: { title: string; sections: { heading: string; body: string }[] }) => {
      if (!projectId) return null
      const entry = addGameplayDesign(projectId, category, prompt, result)
      setEntries((prev) => [entry, ...prev].slice(0, 50))
      return entry
    },
    [projectId]
  )

  const remove = React.useCallback(
    (id: string) => {
      if (!projectId) return
      deleteGameplayDesign(projectId, id)
      setEntries((prev) => prev.filter((e) => e.id !== id))
    },
    [projectId]
  )

  const clear = React.useCallback(() => {
    if (!projectId) return
    clearGameplayDesign(projectId)
    setEntries([])
  }, [projectId])

  return { entries, add, remove, clear }
}

// ─── Assets ───

export interface AssetEntry {
  id: string
  timestamp: number
  category: string
  prompt: string
  result: { title: string; sections: { heading: string; body: string }[] }
}

function getAssetsKey(projectId: string): string {
  return `${ASSETS_KEY}_${projectId}`
}

export function loadAssets(projectId: string): AssetEntry[] {
  if (typeof window === "undefined") return []
  try {
    const raw = localStorage.getItem(getAssetsKey(projectId))
    return raw ? (JSON.parse(raw) as AssetEntry[]) : []
  } catch {
    return []
  }
}

export function saveAssets(projectId: string, entries: AssetEntry[]) {
  if (typeof window === "undefined") return
  localStorage.setItem(getAssetsKey(projectId), JSON.stringify(entries))
}

export function addAsset(
  projectId: string,
  category: string,
  prompt: string,
  result: { title: string; sections: { heading: string; body: string }[] }
): AssetEntry {
  const entry: AssetEntry = {
    id: crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    timestamp: Date.now(),
    category,
    prompt,
    result,
  }
  const existing = loadAssets(projectId)
  const updated = [entry, ...existing].slice(0, 50)
  saveAssets(projectId, updated)
  return entry
}

export function deleteAsset(projectId: string, id: string) {
  const updated = loadAssets(projectId).filter((e) => e.id !== id)
  saveAssets(projectId, updated)
}

export function clearAssets(projectId: string) {
  saveAssets(projectId, [])
}

export function useAssets(projectId: string | null) {
  const [entries, setEntries] = React.useState<AssetEntry[]>([])

  React.useEffect(() => {
    if (projectId) {
      setEntries(loadAssets(projectId))
    } else {
      setEntries([])
    }
  }, [projectId])

  const add = React.useCallback(
    (category: string, prompt: string, result: { title: string; sections: { heading: string; body: string }[] }) => {
      if (!projectId) return null
      const entry = addAsset(projectId, category, prompt, result)
      setEntries((prev) => [entry, ...prev].slice(0, 50))
      return entry
    },
    [projectId]
  )

  const remove = React.useCallback(
    (id: string) => {
      if (!projectId) return
      deleteAsset(projectId, id)
      setEntries((prev) => prev.filter((e) => e.id !== id))
    },
    [projectId]
  )

  const clear = React.useCallback(() => {
    if (!projectId) return
    clearAssets(projectId)
    setEntries([])
  }, [projectId])

  return { entries, add, remove, clear }
}

// ─── React Hooks ───

export function useProjects() {
  const [projects, setProjects] = React.useState<Project[]>([])
  const [activeProjectId, setActiveId] = React.useState<string | null>(null)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setProjects(loadProjects())
    setActiveId(getActiveProjectId())
    setMounted(true)
  }, [])

  const create = React.useCallback((name: string, gameType: string, worldDescription: string, style: string) => {
    const project = createProject(name, gameType, worldDescription, style)
    setProjects((prev) => [project, ...prev])
    setActiveId(project.id)
    return project
  }, [])

  const remove = React.useCallback((id: string) => {
    deleteProject(id)
    setProjects((prev) => prev.filter((p) => p.id !== id))
    if (activeProjectId === id) setActiveId(null)
  }, [activeProjectId])

  const setActive = React.useCallback((id: string | null) => {
    setActiveProjectId(id)
    setActiveId(id)
  }, [])

  const activeProject = React.useMemo(() => {
    return projects.find((p) => p.id === activeProjectId) ?? null
  }, [projects, activeProjectId])

  return { projects, activeProject, activeProjectId, mounted, create, remove, setActive }
}

export function useGenerationSettings() {
  const [settings, setSettingsState] = React.useState<GenerationSettings>(loadSettings())

  const setSettings = React.useCallback((s: GenerationSettings) => {
    saveSettings(s)
    setSettingsState(s)
  }, [])

  return { settings, setSettings }
}