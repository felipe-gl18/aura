import { Marker, MarkerContent } from "@/components/ui/marker";

export default function TypingIndicator({
  name = "Assistente",
}: {
  name?: string;
}) {
  return (
    <Marker role="status">
      <MarkerContent className="shimmer">
        <span className="font-medium">{name}</span> está digitando...
      </MarkerContent>
    </Marker>
  );
}
