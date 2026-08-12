import { useState } from "react";

interface ChatInputProps {
  placeholder?: string;
  onSubmit: (value: string) => void;
}

export default function ChatInput({
  placeholder = "Digite sua resposta...",
  onSubmit,
}: ChatInputProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedValue = value.trim();

    if (!trimmedValue) return;

    onSubmit(trimmedValue);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-2 py-2">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100 sm:px-4 sm:py-3"
      />

      <button
        aria-label="Enviar dado"
        type="submit"
        disabled={!value.trim()}
        className="shrink-0 rounded-xl bg-purple-600 px-3 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50 sm:px-4 sm:py-3"
      >
        Enviar
      </button>
    </form>
  );
}
