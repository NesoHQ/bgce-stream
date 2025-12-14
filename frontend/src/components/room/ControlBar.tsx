import { Button } from "@/components/ui/button";
import { Mic, MicOff, PhoneOff, Radio, Share2 } from "lucide-react";
import { type User } from "@/hooks/useMockRoom";
import { Badge } from "@/components/ui/badge";

interface ControlBarProps {
    user: User;
    status: 'live' | 'waiting' | 'ended';
    onToggleMic: () => void;
    onLeave: () => void;
    onGoLive?: () => void;
    onEndStream?: () => void;
}

export function ControlBar({ user, status, onToggleMic, onLeave, onGoLive, onEndStream }: ControlBarProps) {
    return (
        <div className="h-20 border-t bg-background flex items-center justify-between px-6 md:px-12">
            <div className="flex items-center gap-4">
                {status === 'live' ? (
                    <Badge variant="destructive" className="animate-pulse px-3 py-1 text-sm"><Radio className="h-3 w-3 mr-2" /> LIVE</Badge>
                ) : (
                    <Badge variant="outline" className="text-muted-foreground px-3 py-1 text-sm">OFFLINE</Badge>
                )}
                <div className="bg-muted px-3 py-1 rounded text-xs text-muted-foreground hidden md:block">
                    Room Code: <span className="font-mono text-foreground font-bold select-all">share-code-123</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Button
                    variant={user.isMuted ? "secondary" : "default"}
                    size="icon"
                    className={`h-12 w-12 rounded-full ${!user.isMuted && "bg-green-600 hover:bg-green-700 text-white"}`}
                    onClick={onToggleMic}
                    disabled={user.role === 'listener'} // Listeners can't speak in standard stream, handled by logic usually but visuals here
                >
                    {user.isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                </Button>

                {user.role === 'host' && status === 'waiting' && (
                    <Button onClick={onGoLive} variant="default" className="bg-purple-600 hover:bg-purple-700 text-white">
                        Start Broadcast
                    </Button>
                )}
                {user.role === 'host' && status === 'live' && (
                    <Button onClick={onEndStream} variant="destructive">
                        End Broadcast
                    </Button>
                )}

                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                    <Share2 className="h-5 w-5" />
                </Button>

                <div className="h-8 w-px bg-border mx-2" />

                <Button variant="destructive" size="icon" onClick={onLeave} className="rounded-full">
                    <PhoneOff className="h-5 w-5" />
                </Button>
            </div>

            <div className="w-[100px] hidden md:block">
                {/* Spacer for centering if needed */}
            </div>
        </div>
    );
}
