import { SessionProvider } from "next-auth/react";
import { Role } from "@/genereted";
import { SidebarNav } from "./sidebarNav";

interface Props {
  children: React.ReactNode;
  username: string;
  role: Role;
}

export function DashboardLayout({ children, username, role }: Props) {
  return (
    <SessionProvider>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar fixo */}
        <div className="h-full">
          <SidebarNav username={username} role={role} />
        </div>

        {/* Só o main rola */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </SessionProvider>
  );
}
