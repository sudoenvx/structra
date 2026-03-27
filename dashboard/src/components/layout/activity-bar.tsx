import { BlocksIcon, FormIcon, LayoutDashboardIcon, MessageSquareTextIcon, SettingsIcon, UserIcon } from "lucide-react"

interface ActivityItem {
    id: string
    icon: React.ReactNode
    label: string
}

const activities: ActivityItem[] = [
    { id: 'forms', icon: <FormIcon className="w-5 h-5" />, label: 'Forms' },
    { id: 'responses', icon: <MessageSquareTextIcon className="w-5 h-5" />, label: 'Responses' },
    { id: 'integrations', icon: <BlocksIcon className="w-5 h-5" />, label: 'Integrations' },
    // Add more activities as needed
]

function UserAvatar() {
    return (
        <div className="p-2 text-sm rounded-sm bg-st-secondary-tint hover:bg-st-secondary hover:text-st-secondary-text cursor-pointer text-st-secondary-tint-text flex items-center justify-center transition-colors duration-150">
            <UserIcon className="w-5 h-5" />
        </div>
    )
}

function SettingsItem() {
    return (
        <div className="p-2 text-sm rounded-sm bg-st-secondary-tint hover:bg-st-secondary hover:text-st-secondary-text cursor-pointer text-st-secondary-tint-text flex items-center justify-center transition-colors duration-150">
            <SettingsIcon className="w-5 h-5" />
        </div>
    )
}

function ActivityItemComponent({ icon, label }: { icon: React.ReactNode, label: string }) {
    return (
        <div title={label} className="w-9 h-9 bg-st-secondary-tint hover:bg-st-secondary hover:text-st-primary-text rounded-sm flex justify-center items-center gap-2">
            {icon}
        </div>
    )
}

function Logo() {
    return (
        <div className="w-9 h-9 bg-st-primary hover:bg-st-primary-hover rounded-sm flex justify-center items-center gap-2">
            {/* <FormIcon className="w-5 h-5 text-st-primary-text" /> */}
            <LayoutDashboardIcon className="w-5 h-5 text-st-primary-text" />
        </div>
    )
}

function ActivityBar() {
  return (
    <div className='h-full bg-st-surface p-2 flex flex-col justify-between items-center border-r border-st-border'>
        <div className="flex flex-col gap-2 flex-1">
            <Logo />
            {activities.map((activity) => (
                <ActivityItemComponent key={activity.id} icon={activity.icon} label={activity.label} />
            ))}
        </div>
        <div className="flex flex-col gap-2">
            <SettingsItem />
            <UserAvatar />
        </div>
    </div>
  )
}

export default ActivityBar