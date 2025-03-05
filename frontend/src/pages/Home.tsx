import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useState } from "react";
import useWebSocket from "@/hooks/useWebSocket";
import Headline from "@/components/ui/headline";
import "../styles/Home.css";
import ChatField from "@/components/func/ChatField";

export default function Home() {
  const [open, setOpen] = useState(true);
  const { messages, sendMessage } = useWebSocket("wss://localhost:8080");

  return (
    <>
      <SidebarProvider
        className="bg-background"
        open={open}
        onOpenChange={setOpen}
      >
        <AppSidebar />
        <SidebarTrigger className="sbTrigger bg-accent/60 text-white ml-4 mt-4 shadow-sm shadow-primary hover:shadow-md hover:shadow-contrastCopper hover:font-bold" />
        <main className="flex flex-1 flex-col gap-4 p-4 pt-4">
          <Headline />
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="h-24 rounded-xl bg-contrastBlue/30 text-center shadow-md shadow-primary/30"></div>
            <div className="h-24 rounded-xl bg-contrastCopper/50 text-center shadow-md shadow-primary/40"></div>
            <div className="h-24 rounded-xl bg-contrastBlue/30 text-center shadow-md shadow-primary/30"></div>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min bg-accent/50 text-center flex flex-col justify-end shadow-md shadow-primary/30">
            <ChatField messages={messages} sendMessage={sendMessage} />
          </div>
        </main>
      </SidebarProvider>
    </>
  );
}
