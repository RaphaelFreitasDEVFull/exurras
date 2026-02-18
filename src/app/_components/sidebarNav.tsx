"use client";

import { Button } from "@/components/ui/button";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetTitle,
} from "@/components/ui/sheet";
import { Home, Music, Plus, User2, Drum, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { useState } from "react";
import NavContent from "./navbar";
import { Role } from "@/genereted";

interface Props {
  username: string;
  role: Role;
}

export function SidebarNav({ username, role }: Props) {
  const navItems = [
    { title: "Início", href: "/", icon: Home, isAdmin: false },
    { title: "Pontos", href: "/pontos", icon: Music, isAdmin: false },
    { title: "Adicionar", href: "/pontos/novo", icon: Plus, isAdmin: false },
    { title: "Usuário", href: "/usuario", icon: User2, isAdmin: true },
    { title: "Toques", href: "/toques", icon: Drum, isAdmin: false },
  ];

  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const firstLetter = username?.[0]?.toUpperCase() ?? "?";

  const filtered = navItems.filter((i) => !i.isAdmin || role === "ADMIN");

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden md:block">
        <NavContent
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          pathname={pathname}
          filtered={filtered}
          username={username}
          firstLetter={firstLetter}
        />
      </div>

      {/* MOBILE */}
      <div className="md:hidden p-2 border-b flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetTitle className="sr-only">Menu de navegação</SheetTitle>

          <SheetContent side="left" className="p-0 w-72">
            <NavContent
              mobile
              collapsed={false}
              pathname={pathname}
              filtered={filtered}
              username={username}
              firstLetter={firstLetter}
              setCollapsed={() => {}}
            />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
