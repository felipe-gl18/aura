import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatBotWrapper from "@/features/chatbot/ChatBotWrapper";
import ScrollToTop from "../ScrollToTop";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1 bg-white">
        <Outlet />
      </main>

      <Footer />
      <ChatBotWrapper />
    </div>
  );
}
