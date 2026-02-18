import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { LogOut, Music, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import Link from "next/link";
import { logout } from "./logout";

export default function NavContent({
  mobile,
  collapsed,
  pathname,
  filtered,
  username,
  firstLetter,
  setCollapsed,
}: any) {
  async function handleLogout() {
    await logout();
  }
  return (
    <TooltipProvider delayDuration={100}>
      <aside
        className={cn(
          "flex h-dvh flex-col border-r bg-background transition-all duration-300",
          collapsed ? "w-17.5" : "w-64",
          mobile && "w-full border-none",
        )}
      >
        {/* HEADER */}
        <div className="flex h-14 items-center justify-between px-3 border-b">
          {!collapsed && (
            <div className="flex items-center gap-2 font-semibold">
              <Music size={18} />
              Pontos
            </div>
          )}

          {!mobile && (
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setCollapsed((c: boolean) => !c)}
            >
              {collapsed ? (
                <PanelLeftOpen size={18} />
              ) : (
                <PanelLeftClose size={18} />
              )}
            </Button>
          )}
        </div>

        {/* NAV */}
        <nav className="flex-1 p-2 space-y-1">
          {filtered.map((item: any) => {
            const Icon = item.icon;

            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            const link = (
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted",
                  collapsed && "justify-center",
                )}
              >
                <Icon size={18} />
                {!collapsed && item.title}
              </Link>
            );

            if (collapsed && !mobile) {
              return (
                <Tooltip key={item.href}>
                  <TooltipTrigger asChild>{link}</TooltipTrigger>
                  <TooltipContent side="right">{item.title}</TooltipContent>
                </Tooltip>
              );
            }

            return <div key={item.href}>{link}</div>;
          })}
        </nav>

        {/* FOOTER */}
        <div className="border-t p-2 space-y-2">
          <Button
            variant="ghost"
            className={cn("w-full gap-2", collapsed && "justify-center")}
            onClick={handleLogout}
          >
            <LogOut size={18} />
            {!collapsed && "Sair"}
          </Button>

          <div
            className={cn(
              "flex items-center gap-3 px-2 py-2 rounded-lg bg-muted",
              collapsed && "justify-center",
            )}
          >
            <div className="h-8 w-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
              {firstLetter}
            </div>

            {!collapsed && (
              <span className="text-sm font-medium truncate">{username}</span>
            )}
          </div>
        </div>
      </aside>
    </TooltipProvider>
  );
}
