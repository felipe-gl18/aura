import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatBotWrapper from "@/features/chatbot/ChatBotWrapper";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1 bg-white">
        <Outlet />
      </main>

      <Footer />
      <ChatBotWrapper />
    </div>
  );
}
