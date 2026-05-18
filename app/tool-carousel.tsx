"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type Tool = {
  name: string;
  image: string;
};

type ToolCarouselProps = {
  tools: Tool[];
};

export function ToolCarousel({ tools }: ToolCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === 0 ? tools.length - 1 : current - 1
    );
  }, [tools.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % tools.length);
  }, [tools.length]);

  useEffect(() => {
    const timer = window.setInterval(goToNext, 3500);

    return () => window.clearInterval(timer);
  }, [goToNext]);

  return (
    <div className="relative mx-auto flex h-[460px] w-full max-w-[560px] items-center justify-center overflow-visible bg-transparent">
      <div className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-orange-400/20 blur-3xl" />
      <div className="pointer-events-none absolute h-[300px] w-[300px] rounded-full bg-yellow-300/20 blur-3xl" />

      {tools.map((tool, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={tool.name}
            className={`absolute inset-0 flex items-center justify-center transition duration-700 ease-out ${
              isActive
                ? "translate-x-0 opacity-100"
                : "pointer-events-none translate-x-8 opacity-0"
            }`}
          >
            <img
              src={tool.image}
              alt={tool.name}
              className="h-auto max-h-[360px] w-auto animate-[float_5s_ease-in-out_infinite] bg-transparent object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)] transition duration-500 hover:scale-105"
            />
          </div>
        );
      })}

      <button
        type="button"
        aria-label="Image précédente"
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-950/80 text-white shadow-lg transition hover:bg-orange-500"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        type="button"
        aria-label="Image suivante"
        onClick={goToNext}
        className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-950/80 text-white shadow-lg transition hover:bg-orange-500"
      >
        <ChevronRight size={22} />
      </button>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {tools.map((tool, index) => (
          <button
            key={tool.name}
            type="button"
            aria-label={`Afficher ${tool.name}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition ${
              index === activeIndex
                ? "w-8 bg-orange-500"
                : "w-2.5 bg-neutral-950/20 hover:bg-neutral-950/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}