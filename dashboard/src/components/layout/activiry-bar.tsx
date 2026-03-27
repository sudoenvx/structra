import { HomeIcon, LayoutDashboardIcon, SearchIcon, SettingsIcon, UserIcon } from "lucide-react"

interface ActivityItem {
    id: string
    icon: React.ReactNode
    label: string
}

const activities: ActivityItem[] = [
    { id: 'home', icon: <HomeIcon className="w-5 h-5" />, label: 'Home' },
    { id: 'search', icon: <SearchIcon className="w-5 h-5" />, label: 'Search' },
    { id: 'settings', icon: <SettingsIcon className="w-5 h-5" />, label: 'Settings' },
    // Add more activities as needed
]

function UserAvatar() {
    return (
        <div className="p-2 text-sm rounded-sm bg-st-primary hover:bg-st-primary-hover cursor-pointer text-st-primary-text flex items-center justify-center transition-colors duration-150">
            <UserIcon className="w-5 h-5" />
        </div>
    )
}

function ActivityItemComponent({ icon, label }: { icon: React.ReactNode, label: string }) {
    return (
        <div title={label} className="p-2 bg-st-primary-tint hover:bg-st-primary hover:text-st-primary-text rounded-sm flex items-center gap-2">
            {icon}
        </div>
    )
}

function Logo() {
    return (
        <div className="p-2 bg-st-primary hover:bg-st-primary-hover rounded-sm flex items-center gap-2">
        <LayoutDashboardIcon className="w-5 h-5 text-st-primary-text" />
      </div>
    )
}

function ActivityBar() {
  return (
    <div className='h-full bg-st-card p-2 flex flex-col justify-between items-center rounded-sm'>
        <div className="flex flex-col gap-2 flex-1">
            <Logo />
            {activities.map((activity) => (
                <ActivityItemComponent key={activity.id} icon={activity.icon} label={activity.label} />
            ))}
        </div>
        <div>
            <UserAvatar />
        </div>
    </div>
  )
}

export default ActivityBar