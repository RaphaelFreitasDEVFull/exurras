"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Music, Plus, Home, User2 } from "lucide-react";
import { Role } from "../../../prisma/genereted/client";

const navItems = [
  {
    title: "Início",
    href: "/",
    icon: Home,
    isAdmin: false,
  },
  {
    title: "Pontos",
    href: "/pontos",
    icon: Music,
    isAdmin: false,
  },
  {
    title: "Adicionar Ponto",
    href: "/pontos/novo",
    icon: Plus,
    isAdmin: false,
  },

  {
    title: "Usuario",
    href: "/usuarios",
    icon: User2,
    isAdmin: true,
  },
];

interface Props {
  username: string;
  role: Role;
}

export function SidebarNav({ username, role }: Props) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col border-r border-sidebar-border bg-sidebar">
      <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          <Music className="h-5 w-5 text-primary-foreground" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-sidebar-foreground">
            Pontos
          </span>
          <span className="text-xs text-muted-foreground">Umbanda</span>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navItems
          .filter((item) => !item.isAdmin || (item.isAdmin && role === "ADMIN"))
          .map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                )}
              >
                <Icon className="h-5 w-5" />
                {item.title}
              </Link>
            );
          })}
      </nav>

      <div className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3 rounded-lg bg-sidebar-accent px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
            {username.split("")[0].toUpperCase()}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-sidebar-foreground ">
              {username.toUpperCase()}
            </span>
            <span className="text-xs text-muted-foreground">Configurações</span>
          </div>
        </div>
      </div>
    </div>
  );
}
