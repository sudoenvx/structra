import { Button } from "@dashboard/components/ui/button"
import { Card } from "@dashboard/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@dashboard/components/ui/dropdown-menu"
import { ClockIcon, CopyIcon, ExternalLinkIcon, FormIcon, MoreHorizontalIcon, Share2Icon, Trash2Icon } from "lucide-react"
import type { FormModel } from "../types"

interface FormCardProps {
    form: FormModel
}

function FormCard({ form }: FormCardProps) {
  const formattedUpdatedAt = new Date(form.updated_at).toLocaleDateString(undefined, {
    month: "short",
    day: "2-digit",
    year: "numeric",
  })

  return (
    <Card className="flex flex-col gap-3 border border-st-border bg-white">
        <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-sm bg-st-primary-tint text-st-primary-tint-text flex items-center justify-center">
                    <FormIcon className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-sm font-semibold text-st-text">{form.name}</h3>
                    <div className="flex items-center gap-2 text-[11px] text-st-text-muted">
                        <span>{formattedUpdatedAt}</span>
                    </div>
                </div>
            </div>

            <DropdownMenu
                align="end"
                triggerClassName="p-1 rounded-sm hover:bg-st-surface-raised"
                trigger={<MoreHorizontalIcon className="w-4 h-4 text-st-text-muted" />}
            >
                <DropdownMenuLabel>Form Actions</DropdownMenuLabel>
                <DropdownMenuItem icon={<ExternalLinkIcon />}>Open</DropdownMenuItem>
                <DropdownMenuItem icon={<Share2Icon />}>Share</DropdownMenuItem>
                <DropdownMenuItem icon={<CopyIcon />}>Duplicate</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem icon={<Trash2Icon />} variant="danger">Archive</DropdownMenuItem>
            </DropdownMenu>
        </div>

        <p className="text-[13px] text-st-text-muted">
            {form.description ?? "No description added yet."}
        </p>

        <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-st-text-faint"></span>
            <div className="flex items-center gap-2">
                <Button size="sm" variant="secondary" tint>Open</Button>
                {/* <Button size="sm" variant="ghost" tint>Share</Button> */}
            </div>
        </div>
    </Card>
  )
}

export default FormCard
