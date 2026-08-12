import { Button } from "@/components/ui/button";
import type { FlowOption } from "./types";

export default function ChatOptions({
  options,
  onSelect,
}: {
  options: FlowOption[];
  onSelect: (option: FlowOption) => void;
}) {
  return (
    <div className="flex flex-wrap justify-end gap-2">
      {options.map((option) => (
        <Button
          aria-label={`Selecionar ${option.label}`}
          key={option.label}
          variant="outline"
          size="sm"
          onClick={() => onSelect(option)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
