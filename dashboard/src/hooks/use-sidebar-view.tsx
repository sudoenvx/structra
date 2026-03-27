import type React from "react"
import { create } from "zustand"

interface SidebarViewState {
    view_id: string,
    currentView: React.ReactNode
    setCurrentView: (view: React.ReactNode) => void
}

const useSidebarView = create<SidebarViewState>((set) => ({
    currentView: null,
    view_id: "0",
    setCurrentView: (view: React.ReactNode) => set({ currentView: view }),
}))

export default useSidebarView