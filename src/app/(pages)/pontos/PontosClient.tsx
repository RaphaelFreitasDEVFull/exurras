"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SearchBar } from "./SearchBar";
import { DashboardLayout } from "@/app/_components/dashboardLayout";
import { Role } from "@/genereted";

interface Point {
  id: string;
  title: string;
  author?: string | null;
  slug: string;
}

interface Line {
  id: string;
  title: string;
  points: Point[];
}

interface Props {
  lines: Line[];
  username: string;
  role: Role;
}

export default function PontosClient({ lines, username, role }: Props) {
  const [search, setSearch] = useState("");

  const filteredLines = useMemo(() => {
    if (!search) return lines;

    const lower = search.toLowerCase();

    return lines
      .map((line) => {
        const filteredPoints = line.points.filter((point) => {
          return (
            point.title.toLowerCase().includes(lower) ||
            point.author?.toLowerCase().includes(lower) ||
            line.title.toLowerCase().includes(lower)
          );
        });

        if (filteredPoints.length === 0) return null;

        return {
          ...line,
          points: filteredPoints,
        };
      })
      .filter(Boolean) as Line[];
  }, [search, lines]);

  return (
    <DashboardLayout username={username} role={role}>
      <div className="flex flex-col gap-10 p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full">
        {/* Barra de pesquisa */}

        <SearchBar value={search} onChange={setSearch} />

        {/* Resultado vazio */}
        {filteredLines.length === 0 && (
          <p className="text-muted-foreground">Nenhum resultado encontrado.</p>
        )}

        {/* Renderização */}
        {filteredLines.map((line) => (
          <div key={line.id} className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold border-b-2 border-primary w-fit pb-1">
              {line.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
              {line.points.map((point) => (
                <Link
                  key={point.id}
                  href={`/pontos/${point.slug}`}
                  className="
                  p-6
                  flex flex-col
                  items-center
                  justify-center
                  text-center
                  border
                  rounded-2xl
                  hover:bg-muted
                  hover:shadow-md
                  transition-all
                "
                >
                  <h3 className="font-medium">{point.title}</h3>

                  {point.author && (
                    <span className="text-xs text-muted-foreground mt-1">
                      {point.author}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
