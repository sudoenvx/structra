import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import Dashboard from './modules/dashboard/pages/dashboard'
import AppShell from './components/layout/app-shell'

const rootRoute = createRootRoute({
  component: AppShell
})


const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Dashboard />,
})


const routeTree = rootRoute.addChildren([indexRoute,])

export const router = createRouter({
  routeTree,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
