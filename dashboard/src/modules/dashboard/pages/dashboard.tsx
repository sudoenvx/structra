import DashboardLayout from "../components/layout/dashboard-layout"
import UserForms from "../components/user-forms"
import { ChartBarIcon, SparklesIcon, ZapIcon } from "lucide-react"

const dashboardStats = [
    {
        id: "total-forms",
        label: "Total Forms",
        value: "12",
        hint: "3 active this week",
        icon: <SparklesIcon className="w-5 h-5" />,
    },
    {
        id: "responses",
        label: "Responses",
        value: "1,284",
        hint: "Last 30 days",
        icon: <ChartBarIcon className="w-5 h-5" />,
    },
    {
        id: "completion",
        label: "Avg. Completion",
        value: "62%",
        hint: "Up 8% this week",
        icon: <ZapIcon className="w-5 h-5" />,
    },
    {
        id: "active-forms",
        label: "Active Forms",
        value: "5",
        hint: "Forms with responses in last 7 days",
        icon: <SparklesIcon className="w-5 h-5" />,
    }
]

function Dashboard() {
  return (
    <DashboardLayout>
        <div className="p-4 flex flex-col gap-4">
            <div className="grid grid-cols-12 gap-4">
                {/* <Card className="col-span-12 lg:col-span-8 flex flex-col gap-3 border border-st-border bg-white">
                    <div className="flex items-center gap-2 text-st-primary text-sm font-semibold">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-sm bg-st-primary-tint text-st-primary-tint-text">
                            <SparklesIcon className="w-4 h-4" />
                        </span>
                        Welcome back
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-st-text">Structra Dashboard</h1>
                        <p className="text-st-text-muted text-sm">
                            Build, publish, and analyze your forms from one place. Start with a new form or update an existing one.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <Button variant="primary" size="md">Create New Form</Button>
                        <Button variant="secondary" tint>Browse Templates</Button>
                    </div>
                </Card> */}
                <div className="col-span-12 grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {dashboardStats.map((stat) => (
                            <div key={stat.id} className="flex items-center justify-between rounded-sm bg-st-card px-2 py-2 ">
                                <div>
                                    <div className="text-[11px] text-st-text-muted font-semibold uppercase tracking-widest">{stat.label}</div>
                                    <div className="text-lg font-semibold text-st-text">{stat.value}</div>
                                    <div className="text-[11px] text-st-text">{stat.hint}</div>
                                </div>
                                <div className="w-10 h-10 rounded-sm bg-st-secondary text-st-secondary-text flex items-center justify-center">
                                    {stat.icon}
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
                <div className="h-[0.5px] bg-st-border my-2" />
            <UserForms />
        </div>
    </DashboardLayout>
  )
}

export default Dashboard
