import DashboardLayout from '../components/layout/dashboard-layout'
import { Card } from '@dashboard/components/ui/card'

function Dashboard() {
  return (
    <DashboardLayout>
        <div className="p-4">
            <Card>
                <h1 className='text-2xl font-bold'>Welcome to Structra Dashboard</h1>
                <p className='text-st-secondary'>Get started by creating a new form or exploring existing ones.</p>
            </Card>            
        </div>
    </DashboardLayout>
  )
}

export default Dashboard