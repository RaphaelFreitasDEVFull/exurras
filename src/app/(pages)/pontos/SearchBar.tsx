"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";

export function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative w-full">
      {/* Ícone */}
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
      />

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Pesquisar ponto, autor ou linha..."
        className="
          w-full
          h-11
          pl-11
          pr-10
          rounded-xl
          border
          bg-background
          shadow-sm
          transition-all
          duration-200
          focus:outline-none
          focus:ring-2
          focus:ring-primary/40
          focus:border-primary
          hover:border-primary/40
        "
      />

      {/* Botão limpar */}
      {value && (
        <button
          onClick={() => onChange("")}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-muted-foreground
            hover:text-foreground
            transition
          "
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
