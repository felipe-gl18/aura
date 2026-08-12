import { useEffect, useRef, useState, useCallback } from "react";

type Point = { x: number; y: number };

export function useServicePath<T extends HTMLElement>(selector: string) {
  const containerRef = useRef<T>(null);
  const [path, setPath] = useState("");
  const [size, setSize] = useState({ width: 0, height: 0 });

  const recalc = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const nodes = Array.from(container.querySelectorAll<HTMLElement>(selector));

    const points: Point[] = nodes.map((node) => {
      const rect = node.getBoundingClientRect();
      return {
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top + rect.height / 2,
      };
    });

    setSize({ width: containerRect.width, height: containerRect.height });

    if (points.length < 2) {
      setPath("");
      return;
    }

    let d = `M ${points[0].x},${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i === 0 ? 0 : i - 1];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[i + 2 === points.length ? i + 1 : i + 2];

      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;

      d += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
    }

    setPath(d);
  }, [selector]);

  useEffect(() => {
    recalc();

    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => recalc());
    observer.observe(container);
    container
      .querySelectorAll(selector)
      .forEach((node) => observer.observe(node));

    window.addEventListener("resize", recalc);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", recalc);
    };
  }, [recalc, selector]);

  return { containerRef, path, size };
}
