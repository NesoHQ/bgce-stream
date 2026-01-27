import type { FormEvent, ChangeEvent } from "react";
import { useState } from "react";
import { Send } from "lucide-react";
import type { Message } from "@/hooks/useMockRoom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatAreaProps {
  messages: Message[];
  onSendMessage: (text: string) => void;
}

export function ChatArea({ messages, onSendMessage }: ChatAreaProps) {
  const [input, setInput] = useState<string>("");

  const handleSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-full border-l bg-background/50 backdrop-blur-sm">
      <div className="p-4 border-b font-semibold">Live Chat</div>
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.isSystem ? "items-center" : "items-start"}`}
            >
              {msg.isSystem ? (
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  {msg.text}
                </span>
              ) : (
                <div className="bg-muted/50 p-2 rounded-lg max-w-[90%]">
                  <span className="text-xs font-bold block text-primary">
                    {msg.userName}
                  </span>
                  <span className="text-sm">{msg.text}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
      <form onSubmit={handleSend} className="p-4 border-t flex gap-2">
        <Input
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          placeholder="Say something..."
          className="bg-background"
        />
        <Button size="icon" type="submit" disabled={!input.trim()}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
