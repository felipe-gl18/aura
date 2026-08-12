import { Icon } from "@iconify/react";
import type { ServiceCategory } from "@/types/service-location";
import { categoryLabels, categoryStyles } from "@/types/service-location";

export type CategoryFilterValue = ServiceCategory | "all";

const categoryIcons: Record<ServiceCategory, string> = {
  ddm: "solar:shield-star-bold",
  creas: "solar:home-2-bold",
  cras: "solar:users-group-rounded-bold",
  saude: "solar:health-bold",
  justica: "solar:scale-bold",
};

const categories: ServiceCategory[] = [
  "ddm",
  "creas",
  "cras",
  "saude",
  "justica",
];

export default function CategoryFilter({
  value,
  onChange,
}: {
  value: CategoryFilterValue;
  onChange: (value: CategoryFilterValue) => void;
}) {
  return (
    <div className="flex min-w-0 gap-1.5 overflow-x-auto pb-1 sm:gap-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <button
        aria-label="Todos"
        onClick={() => onChange("all")}
        className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-xs font-bold transition sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm ${
          value === "all"
            ? "bg-primary-main text-white shadow-md"
            : "border border-primary-light bg-surface text-text shadow-sm hover:bg-primary-light"
        }`}
      >
        <Icon
          icon="solar:widget-5-bold"
          width={14}
          height={14}
          className="sm:h-4 sm:w-4"
        />
        Todos
      </button>

      {categories.map((category) => {
        const isActive = value === category;
        const style = categoryStyles[category];

        return (
          <button
            aria-label={`Filtrar ${category}`}
            key={category}
            onClick={() => onChange(category)}
            className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-xs font-bold transition sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm ${
              isActive
                ? "text-white shadow-md"
                : "border border-primary-light bg-surface text-text shadow-sm hover:bg-primary-light"
            }`}
            style={isActive ? { backgroundColor: style.color } : undefined}
          >
            <Icon
              icon={categoryIcons[category]}
              width={14}
              height={14}
              className="sm:h-4 sm:w-4"
            />
            {categoryLabels[category]}
          </button>
        );
      })}
    </div>
  );
}
