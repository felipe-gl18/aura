import { MessageCircleHeart } from "lucide-react";
import { Bot } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
        <div className="border-b px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
              <Bot className="h-6 w-6 text-primary" />
            </div>

            <div>
              <h2 className="font-semibold">AURA Assistant</h2>
              <p className="text-xs text-muted-foreground">
                Atendimento automatizado • Opções pré-definidas
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <ChatBot />
        </div>
      </SheetContent>
    </Sheet>
  );
}
