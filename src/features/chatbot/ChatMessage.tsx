import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/components/ui/message";
import type { ChatMessage as ChatMessageType } from "./types";
import logo from "@/assets/solo_logo.png";

export default function ChatMessage({ message }: { message: ChatMessageType }) {
  const isUser = message.sender === "user";

  return (
    <Message align={isUser ? "end" : "start"}>
      <MessageAvatar>
        <Avatar>
          {!isUser && <AvatarImage src={logo} alt="Assistente AURA" />}
          <AvatarFallback>{isUser ? "Eu" : "A"}</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <Bubble variant={isUser ? "default" : "muted"}>
          <BubbleContent>
            {message.type === "result" ? (
              <div className="flex flex-col gap-1">
                <p className="font-semibold">{message.text}</p>
                {message.description && (
                  <p className="text-sm text-muted-foreground">
                    {message.description}
                  </p>
                )}
              </div>
            ) : (
              message.text
            )}
          </BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  );
}
