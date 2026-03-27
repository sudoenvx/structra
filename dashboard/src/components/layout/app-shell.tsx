import { Outlet } from "@tanstack/react-router";
import AppSidebar from "./app-sidebar";

export default function AppShell() {
  return (
    <div className="h-screen bg-st-bg p-4 gap-3">
      <div className="bg-white flex h-full rounded-xl overflow-hidden">
        <div className="flex-1 overflow-hidden">
          <Outlet />
        </div>
        {/* <AppSidebar /> */}
      </div>
    </div>
  );
}
