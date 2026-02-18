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
      <div className="flex h-dvh w-full overflow-hidden bg-muted/40">
        {/* SidebarNav controla mobile/desktop */}
        <SidebarNav username={username} role={role} />

        {/* Conteúdo */}
        <main className="flex-1 overflow-y-auto w-full md:pt-0 pt-14">
          {children}
        </main>
      </div>
    </SessionProvider>
  );
}
