export interface ActivityItem {
    id: string
    icon: React.ReactNode
    label: string

    onClick: () => void
}