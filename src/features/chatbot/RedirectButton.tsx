import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function RedirectButton({ href }: { href: string }) {
  return (
    <Button
      variant="outline"
      size="lg"
      onClick={() => window.open(href, "_blank")}
      className="w-full whitespace-normal py-4 text-center text-primary-main border-primary-main sm:w-auto sm:py-6"
    >
      <MessageCircle className="shrink-0" />
      Entrar em contato pelo WhatsApp
    </Button>
  );
}
