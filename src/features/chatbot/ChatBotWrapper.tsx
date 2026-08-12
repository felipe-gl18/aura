import { MessageCircleHeart } from "lucide-react";
import { Bot } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ChatBot from "./ChatBot";

export default function ChatBotWrapper() {
  return (
    <Sheet>
      <SheetTrigger
        className="
          fixed
          bottom-4
          right-4
          z-50
          flex
          items-center
          gap-2
          rounded-full
          bg-primary
          p-4
          text-sm
          font-semibold
          text-primary-foreground
          shadow-xl
          transition-all
          hover:scale-105
          hover:shadow-2xl
          active:scale-95
          sm:bottom-6
          sm:right-6
          sm:gap-3
          sm:px-5
        "
      >
        <MessageCircleHeart className="h-5 w-5 shrink-0" />
        <span className="hidden sm:inline">Precisa de ajuda?</span>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex flex-col gap-0 p-0 data-[side=right]:w-full data-[side=right]:sm:w-3/4 data-[side=right]:sm:max-w-sm py-4"
      >
        <div className="border-b px-4 py-4 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:h-11 sm:w-11">
              <Bot className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
            </div>

            <div className="min-w-0">
              <h2 className="truncate font-semibold">AURA Assistant</h2>
              <p className="truncate text-xs text-muted-foreground">
                Atendimento automatizado • Opções pré-definidas
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto p-4 pb-6 sm:p-6 sm:pb-8">
          <ChatBot />
        </div>
      </SheetContent>
    </Sheet>
  );
}
