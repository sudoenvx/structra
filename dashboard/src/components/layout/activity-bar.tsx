import { BlocksIcon, FormIcon, LayoutDashboardIcon, MessageSquareTextIcon, SettingsIcon, UserIcon } from "lucide-react"

interface ActivityItem {
    id: string
    icon: React.ReactNode
    label: string
}

const activities: ActivityItem[] = [
    { id: 'forms', icon: <FormIcon className="w-4 h-4" />, label: 'Forms' },
    { id: 'responses', icon: <MessageSquareTextIcon className="w-4 h-4" />, label: 'Responses' },
    { id: 'integrations', icon: <BlocksIcon className="w-4 h-4" />, label: 'Integrations' },
    // Add more activities as needed
]

function UserAvatar() {
    return (
        <button
            type="button"
            className="h-8 w-full px-2 text-sm rounded-sm bg-st-card hover:bg-st-secondary hover:text-st-secondary-text cursor-pointer text-st-secondary-tint-text flex items-center gap-3 transition-colors duration-150"
        >
            <UserIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Account</span>
        </button>
    )
}

function SettingsItem() {
    return (
        <button
            type="button"
            className="h-8 w-full px-2 text-sm rounded-sm bg-st-card hover:bg-st-secondary hover:text-st-secondary-text cursor-pointer text-st-secondary-tint-text flex items-center gap-3 transition-colors duration-150"
        >
            <SettingsIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Settings</span>
        </button>
    )
}

function ActivityItemComponent({ icon, label }: { icon: React.ReactNode, label: string }) {
    return (
        <button
            type="button"
            title={label}
            className="h-8 w-full px-2 bg-st-card hover:bg-st-secondary hover:text-st-secondary-text text-st-secondary-tint-text rounded-sm flex items-center gap-3 transition-colors duration-150"
        >
            {icon}
            <span className="text-sm font-medium">{label}</span>
        </button>
    )
}

function Logo() {
    return (
        <div className="flex items-center gap-2 bg-st-primary-tint px-1.5 py-1.5 rounded-sm">
            <div className="w-9 h-9 bg-st-primary hover:bg-st-primary-hover rounded-sm flex justify-center items-center gap-2 transition-colors duration-150">
                {/* <FormIcon className="w-4 h-4 text-st-primary-text" /> */}
                <LayoutDashboardIcon className="w-4 h-4 text-st-primary-text" />
            </div>
            <div className="leading-tight">
                <div className="text-sm font-semibold text-st-text">Structra</div>
                <div className="text-xs text-st-muted">Workspace</div>
            </div>
        </div>
    )
}

function ActivityBar() {
  return (
    <div className='h-full w-60 bg-st-surface p-3 flex flex-col justify-between border-r border-st-border'>
        <div className="flex flex-col gap-3 flex-1">
            <Logo />
            <div className="text-[11px] uppercase tracking-wider text-st-muted px-1">
                Navigation
            </div>
            <div className="flex flex-col gap-2">
                {activities.map((activity) => (
                    <ActivityItemComponent key={activity.id} icon={activity.icon} label={activity.label} />
                ))}
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <SettingsItem />
            <UserAvatar />
        </div>
    </div>
  )
}

export default ActivityBar
