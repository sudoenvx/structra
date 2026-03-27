import { Card } from "@dashboard/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@dashboard/components/ui/dropdown-menu"
import type { ActivityItem } from "@dashboard/types/activity-bar"
import {
    BlocksIcon,
    ChevronDownIcon,
    ChevronsUpDown,
    FormIcon,
    LayoutDashboardIcon,
    LogOut,
    MessageSquareTextIcon,
    SettingsIcon,
    UserIcon,
} from "lucide-react"


const activities: ActivityItem[] = [
    { 
        id: 'forms', 
        icon: <FormIcon className="w-4 h-4" />, 
        label: 'Forms',
        onClick: () => {

        }
    },
    { 
        id: 'responses', 
        icon: <MessageSquareTextIcon className="w-4 h-4" />, 
        label: 'Responses',
        onClick: () => {

        }
    },
    { 
        id: 'integrations', 
        icon: <BlocksIcon className="w-4 h-4" />, 
        label: 'Integrations',
        onClick: () => {

        }
    },
    // Add more activities as needed
]

function UserAvatar() {
    return (
        <DropdownMenu
            trigger={<button
            type="button"
            className="group w-full px-1 py-1 text-sm rounded-sm bg-st-card hover:bg-st-secondary hover:text-st-secondary-text cursor-pointer text-st-text flex items-center gap-3 transition-colors duration-150 "
        >
            <div className="relative">
                <div className="w-8 h-8 rounded-sm bg-st-primary text-st-primary-text flex items-center justify-center text-xs font-semibold">
                    AT
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-st-card" />
            </div>
            <div className="flex-1 text-left leading-tight">
                <div className="text-sm font-semibold group-hover:text-st-secondary-text">Ali Tarek</div>
                <div className="text-[11px] text-st-text-muted group-hover:text-st-secondary-text/80">alitarek@gmail.com</div>
            </div>
            <ChevronsUpDown className="w-4 h-4 text-st-text-muted group-hover:text-st-secondary-text" />
        </button>}
        align="end" side="right"
        // offset={0}
        offset={4}
        >
            <div className="flex flex-col gap-1">
                <Card className="p-0! bg-transparent flex items-center gap-2">
                    <div className="w-9 h-9 rounded-sm bg-st-primary text-st-primary-text flex items-center justify-center text-xs font-semibold">
                        AT
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-bold">Ali Tarek</span>
                        {/* <span className="text-xs text-st-text-muted">alitarek@gmail.com</span> */}
                        <span className="text-[10px] text-st-text-muted">Workspace owner</span>
                    </div>
                </Card>
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuItem icon={<UserIcon className="w-4 h-4" />}>Profile</DropdownMenuItem>
                <DropdownMenuItem icon={<SettingsIcon className="w-4 h-4" />}>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="danger" icon={<LogOut />}>Logout</DropdownMenuItem>
            </div>
        </DropdownMenu>
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
        <div className="w-full flex items-center justify-between gap-2 bg-st-card px-1 py-1 rounded-sm">
            <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-st-primary hover:bg-st-primary-hover rounded-sm flex justify-center items-center gap-2 transition-colors duration-150">
                {/* <FormIcon className="w-4 h-4 text-st-primary-text" /> */}
                    <FormIcon className="w-5 h-5 text-st-primary-text" />
                </div>
                <div className="leading-tight">
                    <div className="text-sm font-semibold text-st-text">Structra</div>
                    <div className="text-xs text-st-muted">Form Builder</div>
                </div>
            </div>
        </div>
    )
}

function DashboardActivityBar() {
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

export default DashboardActivityBar
