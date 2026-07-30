import { MessageCircleHeart } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ChatBot from "./ChatBot";

export default function ChatBotWrapper() {
  return (
    <Sheet>
      <SheetTrigger>
        <button
          className="
            fixed
            bottom-6
            right-6
            z-50
            flex
            items-center
            gap-3
            rounded-full
            bg-primary
            px-5
            py-3
            text-sm
            font-semibold
            text-primary-foreground
            shadow-xl
            transition-all
            hover:scale-105
            hover:shadow-2xl
            active:scale-95
          "
        >
          <MessageCircleHeart className="h-5 w-5" />
          Precisa de ajuda?
        </button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader className="border-b bg-primary px-6 py-5 text-primary-foreground">
          <SheetTitle className="text-xl font-bold text-white">
            Assistente AURA
          </SheetTitle>

          <SheetDescription className="text-primary-foreground/80">
            Responda algumas perguntas para encontrarmos o atendimento mais
            adequado para você.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6">
          <ChatBot />
        </div>
      </SheetContent>
    </Sheet>
  );
}
