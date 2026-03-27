import { Button } from "@dashboard/components/ui/button"
import { Input } from "@dashboard/components/ui/input"
import FormCard from "@dashboard/modules/forms/components/form-card"
import type { FormModel } from "@dashboard/modules/forms/types"
import { FilesIcon, PlusIcon, SearchIcon, SlidersHorizontalIcon } from "lucide-react"

function UserForms() {
    const forms: FormModel[] = [
        {
            id: "form_01",
            name: "Lead Capture Form",
            description: "Collect qualified leads from your marketing campaigns.",
            created_at: "2026-03-12T10:00:00Z",
            updated_at: "2026-03-24T09:30:00Z",
        },
        {
            id: "form_02",
            name: "Product Feedback",
            description: "Gather insights about the latest release and feature requests.",
            created_at: "2026-03-16T14:10:00Z",
            updated_at: "2026-03-22T16:05:00Z",
        },
        {
            id: "form_03",
            name: "Event Registration",
            description: "Register attendees and collect dietary preferences.",
            created_at: "2026-03-18T08:45:00Z",
            updated_at: "2026-03-21T12:20:00Z",
        },
        {
            id: "form_01",
            name: "Lead Capture Form",
            description: "Collect qualified leads from your marketing campaigns.",
            created_at: "2026-03-12T10:00:00Z",
            updated_at: "2026-03-24T09:30:00Z",
        },
        {
            id: "form_02",
            name: "Product Feedback",
            description: "Gather insights about the latest release and feature requests.",
            created_at: "2026-03-16T14:10:00Z",
            updated_at: "2026-03-22T16:05:00Z",
        },
        {
            id: "form_03",
            name: "Event Registration",
            description: "Register attendees and collect dietary preferences.",
            created_at: "2026-03-18T08:45:00Z",
            updated_at: "2026-03-21T12:20:00Z",
        },
    ]

  return (
    <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
                <h2 className="font-semibold text-xl text-st-text">Your Workspace Forms</h2>
                <p className="text-st-text-muted text-sm">Manage, organize, and publish your forms here.</p>
            </div>
            <div className="flex items-center gap-2">
                <Button size="md" variant="secondary" tint>Browse Templates</Button>
                <Button
                    variant="primary"
                    size="md"
                    rightIcon={<PlusIcon className="w-4 h-4" />}
                >
                    New Form
                </Button>
            </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="relative flex-1">
                <SearchIcon className="w-4 h-4 text-st-text-faint absolute left-2 top-1/2 -translate-y-1/2" />
                <Input className="pl-8 h-8" placeholder="Search forms..." />
            </div>
            <Button size="md" variant="ghost" tint leftIcon={<SlidersHorizontalIcon className="w-4 h-4" />}>
                Filters
            </Button>
        </div>

        {forms.length === 0 ? (
            <div className="flex justify-center py-10">
                <div className="flex flex-col gap-3 items-center">
                        <FilesIcon className="w-16 h-16 text-st-text-muted" />
                        <div className="text-center">
                            <h3 className="font-medium text-xl leading-7">No Forms Found</h3>
                            <p className="text-st-text-muted text-sm">Create your first form to get started.</p>
                        </div>
                            <Button variant="primary" size="md" rightIcon={<PlusIcon className="w-4 h-4" />}>
                                Create Your First Form
                            </Button>
                </div>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {forms.map((form) => (
                    <FormCard key={form.id} form={form} />
                ))}
            </div>
        )}
    </div>
  )
}

export default UserForms
