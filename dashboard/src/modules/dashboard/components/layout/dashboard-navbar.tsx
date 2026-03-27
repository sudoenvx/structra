import { Button } from "@dashboard/components/ui/button"
import { PlusIcon } from "lucide-react"


function DashboardNavbar() {
  return (
    <div className="bg-st-surface border-b border-st-border text-st-text h-12">
      <div className="flex items-center justify-between h-full px-2 gap-4">
        <div className="flex items-center gap-2">
          <div className="text-lg font-medium lowercase">Structra dashboard</div>
        </div>
        <Button size="md" leftIcon={<PlusIcon className="" />}>Create New Form</Button>
      </div>
    </div>
  )
}

export default DashboardNavbar