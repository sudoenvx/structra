import { Outlet } from "@tanstack/react-router";
import AppBar from "./app-bar";
import ActivityBar from "./activiry-bar";
import AppSidebar from "./app-sidebar";

export default function AppShell() {
  return (
    <div className="h-screen bg-st-bg p-3 gap-3">
      <div className="bg-white flex h-full rounded-lg overflow-hidden p-3 gap-3 border border-st-border">
        <ActivityBar />
        <AppSidebar />
        <div className="flex flex-col flex-1 gap-3">
          <AppBar />

          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
