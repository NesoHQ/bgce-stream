import type { Dispatch, SetStateAction } from "react";
import { useCallback, useEffect, useState } from "react";

export interface User {
  id: string;
  name: string;
  avatar?: string;
  role: UserRole;
  isMuted: boolean;
  isSpeaking: boolean;
  joinedAt: Date;
}

export interface Message {
  id: string;
  userId: string;
  userName: string;
  text: string;
  timestamp: Date;
  isSystem?: boolean;
}

export type RoomType = "stream" | "voice";
export type UserRole = "host" | "listener" | "participant";
export type RoomStatus = "live" | "waiting" | "ended";

export interface UseMockRoomReturn {
  status: RoomStatus;
  me: User;
  users: User[];
  messages: Message[];
  toggleMic: () => void;
  sendMessage: (text: string) => void;
  goLive: () => void;
  endStream: () => void;
  setMe: Dispatch<SetStateAction<User>>;
}

export function useMockRoom(
  roomId: string,
  type: RoomType,
  currentUserRole: UserRole = "listener"
): UseMockRoomReturn {
  const [status, setStatus] = useState<RoomStatus>("waiting");

  const [me, setMe] = useState<User>({
    id: "me",
    name: "You",
    role: currentUserRole,
    isMuted: true,
    isSpeaking: false,
    joinedAt: new Date(),
  });

  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "Host Alice",
      role: "host",
      isMuted: false,
      isSpeaking: true,
      joinedAt: new Date(),
    },
    {
      id: "2",
      name: "Listener Bob",
      role: "listener",
      isMuted: true,
      isSpeaking: false,
      joinedAt: new Date(),
    },
    {
      id: "3",
      name: "Listener Charlie",
      role: "listener",
      isMuted: true,
      isSpeaking: false,
      joinedAt: new Date(),
    },
  ]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      userId: "system",
      userName: "System",
      text: `Welcome to room ${roomId}`,
      timestamp: new Date(),
      isSystem: true,
    },
    {
      id: "2",
      userId: "1",
      userName: "Host Alice",
      text: "Hello everyone! Starting soon.",
      timestamp: new Date(),
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (status === "live" || type === "voice") {
        setUsers((prev) =>
          prev.map((u) => ({
            ...u,
            isSpeaking: !u.isMuted && Math.random() > 0.7,
          }))
        );
      }
    }, 500);
    return () => clearInterval(interval);
  }, [status, type]);

  const toggleMic = useCallback(() => {
    setMe((prev) => ({ ...prev, isMuted: !prev.isMuted }));
  }, []);

  const sendMessage = useCallback(
    (text: string) => {
      const newMessage: Message = {
        id: Math.random().toString(36).substring(7),
        userId: me.id,
        userName: me.name,
        text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newMessage]);
    },
    [me]
  );

  const goLive = useCallback(() => {
    if (me.role === "host") setStatus("live");
  }, [me.role]);

  const endStream = useCallback(() => {
    if (me.role === "host") setStatus("ended");
  }, [me.role]);

  useEffect(() => {
    if (type === "voice") {
      setUsers((prev) => {
        if (prev.some((u) => u.role === "host")) {
          return prev.map((u) => ({ ...u, role: "participant" as UserRole }));
        }
        return prev;
      });
      setMe((prev) => ({ ...prev, role: "participant" }));
    }
  }, [type]);

  return {
    status,
    me,
    users,
    messages,
    toggleMic,
    sendMessage,
    goLive,
    endStream,
    setMe,
  };
}
