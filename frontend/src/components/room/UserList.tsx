import { Mic, MicOff } from "lucide-react";
import type { User } from "@/hooks/useMockRoom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface UserListProps {
  users: User[];
  currentUser: User;
}

export function UserList({ users, currentUser }: UserListProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 font-semibold text-muted-foreground uppercase text-xs tracking-wider">
        Participants ({users.length})
      </div>
      <ScrollArea className="flex-1 px-4">
        <div className="space-y-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  {user.isSpeaking && !user.isMuted && (
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background animate-pulse" />
                  )}
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-medium flex items-center gap-2">
                    {user.name}
                    {user.id === currentUser.id && (
                      <span className="text-xs text-muted-foreground">(You)</span>
                    )}
                  </span>
                  <span className="text-xs text-muted-foreground capitalize">
                    {user.role}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {user.role === "host" && (
                  <Badge variant="secondary" className="text-[10px]">
                    HOST
                  </Badge>
                )}
                {user.isMuted ? (
                  <MicOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Mic className="h-4 w-4 text-green-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
