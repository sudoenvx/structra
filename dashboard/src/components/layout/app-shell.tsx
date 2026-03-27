import { Outlet } from "@tanstack/react-router";
import AppBar from "./app-bar";
import ActivityBar from "./activity-bar";
import AppSidebar from "./app-sidebar";

export default function AppShell() {
  return (
    <div className="h-screen bg-st-bg p-4 gap-3">
      <div className="bg-white flex h-full rounded-2xl overflow-hidden  border border-st-border-strong">
        <ActivityBar />
        <div className="flex flex-col flex-1 ">
          {/* <AppBar /> */}

          <div className="flex-1 overflow-hidden">
            <Outlet />
          </div>
        </div>
        <AppSidebar />
      </div>
    </div>
  );
}
