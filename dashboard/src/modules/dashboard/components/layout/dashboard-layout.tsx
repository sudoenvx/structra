import DashboardNavbar from "./dashboard-navbar"

interface DashboardLayoutProps {
    children?: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex flex-col">
        <DashboardNavbar />
        <div className="flex-1">
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout