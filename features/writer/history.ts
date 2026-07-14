"use client"

import * as React from "react"
import type { HistoryEntry, WriterCategory, GeneratedContent } from "./types"

const STORAGE_KEY = "why_writer_history"

function loadHistory(): HistoryEntry[] {
  if (typeof window === "undefined") return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as HistoryEntry[]) : []
  } catch {
    return []
  }
}

function saveHistory(entries: HistoryEntry[]) {
  if (typeof window === "undefined") return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
}

export function addHistoryEntry(
  category: WriterCategory,
  prompt: string,
  result: GeneratedContent
): HistoryEntry {
  const entry: HistoryEntry = {
    id: crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    timestamp: Date.now(),
    category,
    prompt,
    result,
  }
  const existing = loadHistory()
  const updated = [entry, ...existing].slice(0, 50)
  saveHistory(updated)
  return entry
}

export function getHistory(): HistoryEntry[] {
  return loadHistory()
}

export function clearHistory() {
  saveHistory([])
}

export function deleteHistoryEntry(id: string) {
  const updated = loadHistory().filter((e) => e.id !== id)
  saveHistory(updated)
}

export function useHistory() {
  const [entries, setEntries] = React.useState<HistoryEntry[]>([])
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setEntries(loadHistory())
    setMounted(true)
  }, [])

  const refresh = React.useCallback(() => {
    setEntries(loadHistory())
  }, [])

  const add = React.useCallback(
    (category: WriterCategory, prompt: string, result: GeneratedContent) => {
      const entry = addHistoryEntry(category, prompt, result)
      setEntries((prev) => [entry, ...prev].slice(0, 50))
      return entry
    },
    []
  )

  const remove = React.useCallback((id: string) => {
    deleteHistoryEntry(id)
    setEntries((prev) => prev.filter((e) => e.id !== id))
  }, [])

  const clear = React.useCallback(() => {
    clearHistory()
    setEntries([])
  }, [])

  return { entries, mounted, refresh, add, remove, clear }
}