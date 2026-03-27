import { SidebarCloseIcon } from "lucide-react"
import { Button } from "../ui/button"

function ToggleLayoutButton() {
  return (
    <div className="p-1 hover:bg-st-card">
      <SidebarCloseIcon className="w-5 h-5 text-st-text" />
    </div>
  )
}

function Controls() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="secondary" tint size="sm">
        preview
      </Button>
    </div>
  )
}

function AppBar() {
  return (
    <div className="bg-st-card text-st-text px-2 py-2 rounded-sm">
      <div className="flex">
        <div className="flex items-center gap-2">
          <ToggleLayoutButton />
          <div className="text-md font-medium lowercase">Structra dashboard</div>
        </div>
        <div className="ml-auto">
          <Controls />
        </div>
      </div>
    </div>
  )
}

export default AppBar