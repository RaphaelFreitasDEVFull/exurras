import { Role } from "../../../prisma/genereted/client";
import { SidebarNav } from "./sidebarNav";

interface Props {
  children: React.ReactNode;
  username: string;
  role: Role;
}

export function DashboardLayout({ children, username, role }: Props) {
  return (
    <div className="flex min-h-screen">
      <SidebarNav username={username} role={role} />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
