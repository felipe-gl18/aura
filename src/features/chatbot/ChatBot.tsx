import { useEffect, useRef, useState } from "react";
import flow from "./data/flow.json";
import results from "./data/results.json";
import ChatMessageItem from "./ChatMessage";
import ChatOptions from "./ChatOptions";
import TypingIndicator from "./TypingIndicator";
import type { ChatMessage, FlowData, FlowOption, ResultsData } from "./types";

const flowData = flow as FlowData;
const resultsData = results as ResultsData;

const START_NODE = "start";
const BOT_THINK_DELAY = 900;

function buildInitialMessages(): ChatMessage[] {
  const firstNode = flowData[START_NODE];
  if (!firstNode) return [];

  return [
    {
      id: crypto.randomUUID(),
      sender: "bot",
      type: "question",
      text: firstNode.question,
    },
  ];
}

export default function ChatBot() {
  const [messages, setMessages] = useState<ChatMessage[]>(buildInitialMessages);
  const [currentNodeKey, setCurrentNodeKey] = useState<string | null>(() =>
    flowData[START_NODE] ? START_NODE : null,
  );
  const [isTyping, setIsTyping] = useState(false);
  const scrollAnchorRef = useRef<HTMLDivElement>(null);

  // Rola pra última mensagem sempre que o chat mudar
  useEffect(() => {
    scrollAnchorRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSelect = (option: FlowOption) => {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sender: "user",
        type: "answer",
        text: option.label,
      },
    ]);

    setCurrentNodeKey(null); // some com as opções enquanto o bot "pensa"
    setIsTyping(true);

    window.setTimeout(() => {
      setIsTyping(false);

      if (option.result) {
        const result = resultsData[option.result];
        if (result) {
          setMessages((prev) => [
            ...prev,
            {
              id: crypto.randomUUID(),
              sender: "bot",
              type: "result",
              text: result.title,
              description: result.message,
            },
          ]);
        }
        return;
      }

      if (option.next) {
        const nextNode = flowData[option.next];
        if (nextNode) {
          setMessages((prev) => [
            ...prev,
            {
              id: crypto.randomUUID(),
              sender: "bot",
              type: "question",
              text: nextNode.question,
            },
          ]);
          setCurrentNodeKey(option.next);
        }
      }
    }, BOT_THINK_DELAY);
  };

  const currentNode = currentNodeKey ? flowData[currentNodeKey] : null;

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 py-12">
      <div className="flex flex-col gap-4">
        {messages.map((message) => (
          <ChatMessageItem key={message.id} message={message} />
        ))}
      </div>

      {isTyping && <TypingIndicator />}

      {currentNode && !isTyping && (
        <ChatOptions options={currentNode.options} onSelect={handleSelect} />
      )}

      <div ref={scrollAnchorRef} />
    </div>
  );
}
