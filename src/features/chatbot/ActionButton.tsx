import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

interface ActionButtonProps {
  href: string;
  type: "whatsapp" | "phone";
}

export default function ActionButton({ href, type }: ActionButtonProps) {
  const isWhatsApp = type === "whatsapp";
  return (
    <Button
      aria-label={isWhatsApp ? "Entrar em contato pelo WhatsApp" : "Ligar"}
      variant="outline"
      size="lg"
      onClick={() => {
        window.location.href = href;
      }}
      className="w-full whitespace-normal py-4 text-center text-primary-main border-primary-main sm:w-auto sm:py-6"
    >
      {isWhatsApp ? (
        <MessageCircle className="shrink-0" />
      ) : (
        <Phone className="shrink-0" />
      )}

      {isWhatsApp ? "Entrar em contato pelo WhatsApp" : "Ligar para o 180"}
    </Button>
  );
}
