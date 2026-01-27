"use client";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { useMockRoom } from "@/hooks/useMockRoom";
import { ControlBar } from "@/components/room/ControlBar";
import { UserList } from "@/components/room/UserList";
import { ChatArea } from "@/components/room/ChatArea";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mic } from "lucide-react";

export default function StreamRoom() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = typeof params.id === "string" ? params.id : params.id?.[0] ?? "default";
  const role = searchParams.get("role") === "host" ? "host" : "listener";

  const {
    status,
    me,
    users,
    messages,
    toggleMic,
    sendMessage,
    goLive,
    endStream,
  } = useMockRoom(id, "stream", role);

  const host = users.find((u) => u.role === "host");

  return (
    <div className="flex flex-col h-[calc(100vh-65px)] overflow-hidden bg-background">
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex items-center justify-center p-6 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

          {status === "live" ? (
            <div className="flex flex-col items-center gap-6 z-10 animate-in fade-in zoom-in duration-500">
              <div className="relative">
                <Avatar className="h-40 w-40 border-4 border-primary ring-4 ring-primary/20">
                  <AvatarImage src={host?.avatar} />
                  <AvatarFallback className="text-4xl">
                    {host?.name[0] || "H"}
                  </AvatarFallback>
                </Avatar>
                {host?.isSpeaking && !host?.isMuted && (
                  <span className="absolute inset-0 rounded-full border-4 border-green-500 animate-ping opacity-75" />
                )}
                <div className="absolute bottom-2 right-2 bg-primary text-primary-foreground p-2 rounded-full shadow-lg">
                  <Mic className="h-6 w-6" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold">
                  {host?.name || "Broadcaster"} is live
                </h2>
                <p className="text-xl text-muted-foreground animate-pulse">
                  Listening...
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center z-10 space-y-4">
              <h2 className="text-2xl font-semibold text-muted-foreground">
                Stream has not started yet
              </h2>
              {role === "host" && (
                <p className="text-sm">
                  You are the host. Click &quot;Start Broadcast&quot; below when
                  ready.
                </p>
              )}
            </div>
          )}
        </div>

        <div className="w-full md:w-[350px] border-l bg-background flex flex-col">
          <Tabs defaultValue="chat" className="flex-1 flex flex-col">
            <div className="px-4 pt-2">
              <TabsList className="w-full">
                <TabsTrigger value="chat" className="flex-1">
                  Chat
                </TabsTrigger>
                <TabsTrigger value="users" className="flex-1">
                  Users ({users.length})
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent
              value="chat"
              className="flex-1 h-0 data-[state=active]:flex flex-col mt-0 border-0"
            >
              <ChatArea messages={messages} onSendMessage={sendMessage} />
            </TabsContent>
            <TabsContent
              value="users"
              className="flex-1 h-0 data-[state=active]:flex flex-col mt-0 border-0"
            >
              <UserList users={users} currentUser={me} />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <ControlBar
        user={me}
        status={status}
        onToggleMic={toggleMic}
        onLeave={() => router.push("/")}
        onGoLive={goLive}
        onEndStream={endStream}
      />
    </div>
  );
}
