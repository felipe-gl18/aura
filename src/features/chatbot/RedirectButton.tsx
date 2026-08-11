import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function RedirectButton({ href }: { href: string }) {
  return (
    <Button
      variant="outline"
      size="lg"
      onClick={() => window.open(href, "_blank")}
      className="py-6 text-primary-main border-primary-main"
    >
      <MessageCircle />
      Entrar em contato pelo WhatsApp
    </Button>
  );
}
