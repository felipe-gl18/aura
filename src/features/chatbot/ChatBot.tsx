import { useEffect, useRef, useState } from "react";
import flow from "./data/flow.json";
import results from "./data/results.json";
import ChatMessageItem from "./ChatMessage";
import ChatOptions from "./ChatOptions";
import TypingIndicator from "./TypingIndicator";
import type {
  ChatMessage,
  ChatState,
  FlowData,
  FlowOption,
  ResultsData,
  UserData,
} from "./types";
import ChatInput from "./ChatInput";
import RedirectButton from "./RedirectButton";
import { sendEmail } from "@/services/email";

const flowData = flow as FlowData;
const resultsData = results as ResultsData;

const START_NODE = "start";
const BOT_THINK_DELAY = 900;

const organizationsData = {
  creas: {
    whatsapp: "558881132679",
  },
  ddm: {
    whatsapp: "5585989597453",
  },
};

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
  const [user, setUser] = useState<UserData>({
    name: "",
    email: "",
    whatsapp: "",
    preferredChannel: null,
  });
  const [organization, setOrganization] = useState<"creas" | "ddm" | null>(
    null,
  );
  const [chatState, setChatState] = useState<ChatState>("flow");
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
            {
              id: crypto.randomUUID(),
              sender: "bot",
              type: "question",
              text: "Para continuarmos, preciso do seu nome.",
            },
          ]);
        }
        setChatState("ask_name"); // muda o estado do chat para "ask_name" após mostrar o resultado
        setOrganization(option.result as "creas" | "ddm");
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

  const handleInputSubmit = (value: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sender: "user",
        type: "answer",
        text: value,
      },
    ]);

    if (chatState === "ask_name") {
      setUser((prev) => ({ ...prev, name: value }));
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          type: "question",
          text: "Qual canal é mais seguro para entrarmos em contato com você?",
        },
      ]);
      setChatState("ask_channel");
      return;
    }

    if (chatState === "ask_email") {
      const updatedUser = {
        ...user,
        email: value,
      };
      setUser(updatedUser);
      askForImmediateContact(updatedUser);
      return;
    }

    if (chatState === "ask_whatsapp") {
      const updatedUser = {
        ...user,
        whatsapp: value,
      };
      setUser(updatedUser);
      askForImmediateContact(updatedUser);
      return;
    }
  };

  const handleChannelSelect = (channel: "email" | "whatsapp") => {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sender: "user",
        type: "answer",
        text: channel === "email" ? "Email" : "WhatsApp",
      },
    ]);

    setUser((prev) => ({
      ...prev,
      preferredChannel: channel,
    }));

    if (channel === "email") {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          type: "question",
          text: "Qual é o seu e-mail pessoal?",
        },
      ]);

      setChatState("ask_email");
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sender: "bot",
        type: "question",
        text: "Qual é o seu WhatsApp?",
      },
    ]);

    setChatState("ask_whatsapp");
  };

  const handleImmediateContact = (immediate: boolean) => {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sender: "user",
        type: "answer",
        text: immediate ? "Sim" : "Não",
      },
    ]);

    if (immediate) {
      setChatState("redirect");
      return;
    }

    setChatState("finished");
  };

  const askForImmediateContact = async (updatedUser: typeof user) => {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sender: "bot",
        type: "question",
        text: `Salvamos suas informações! O serviço escolhido entrará
         em contato com você. Você precisa de atendimento imediato? 
         Nesse caso, podemos redirecionar você para o atendimento de emergência.`,
      },
    ]);
    setChatState("ask_immediate");
    await sendEmail({
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.whatsapp,
      subject: "Contato via ChatBot",
      organization: organization as "creas" | "ddm",
      preferredChannel: updatedUser.preferredChannel as "email" | "whatsapp",
      message: `
        Novo contato realizado através do AURA.

        Nome: ${updatedUser.name}
        E-mail: ${updatedUser.email || "Não informado"}
        WhatsApp: ${updatedUser.whatsapp || "Não informado"}
        Canal preferencial: ${updatedUser.preferredChannel}

        Serviço indicado: ${organization}
      `.trim(),
    });
  };

  const currentNode = currentNodeKey ? flowData[currentNodeKey] : null;

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="flex flex-1 flex-col gap-3 sm:gap-4">
        {messages.map((message) => (
          <ChatMessageItem key={message.id} message={message} />
        ))}
      </div>

      {isTyping && <TypingIndicator />}

      {chatState === "flow" && currentNode && !isTyping && (
        <ChatOptions options={currentNode.options} onSelect={handleSelect} />
      )}

      {chatState === "ask_channel" && !isTyping && (
        <ChatOptions
          options={[{ label: "Email" }, { label: "WhatsApp" }]}
          onSelect={(option) =>
            handleChannelSelect(
              option.label.toLowerCase() as "email" | "whatsapp",
            )
          }
        />
      )}

      {chatState === "ask_immediate" && !isTyping && (
        <ChatOptions
          options={[
            { label: "Sim, preciso de atendimento imediato" },
            { label: "Não, posso aguardar" },
          ]}
          onSelect={(option) =>
            handleImmediateContact(
              option.label === "Sim, preciso de atendimento imediato",
            )
          }
        />
      )}

      {chatState === "redirect" && !isTyping && organization && (
        <RedirectButton
          href={`https://wa.me/${organizationsData[organization].whatsapp}`}
        />
      )}

      {!isTyping &&
        (chatState === "ask_name" ||
          chatState === "ask_email" ||
          chatState === "ask_whatsapp") && (
          <ChatInput
            placeholder={
              chatState === "ask_name"
                ? "Digite seu nome..."
                : chatState === "ask_email"
                  ? "Digite seu e-mail..."
                  : "Digite seu WhatsApp..."
            }
            onSubmit={handleInputSubmit}
          />
        )}

      <div ref={scrollAnchorRef} />
    </div>
  );
}
