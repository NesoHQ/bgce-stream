import { LogOut, Mic, MicOff } from "lucide-react"
import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/Card"
import { UserList } from "../components/features/UserList"
import { StatusIndicator } from "../components/features/StatusIndicator"
import { useStreamStore } from "../store/useStreamStore"
import { cn } from "../lib/utils"

export function ListenerView() {
    const {
        currentUser,
        streamStatus,
        isMicMuted,
        connectedUsers,
        leaveStream
    } = useStreamStore()

    return (
        <div className="flex flex-col items-center min-h-screen p-4 gap-8 animate-in fade-in duration-500">
            <header className="w-full max-w-4xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <StatusIndicator status={streamStatus} />
                    {currentUser && (
                        <span className="text-sm text-slate-400">
                            Listening as <span className="text-white font-medium">{currentUser.name}</span>
                        </span>
                    )}
                </div>
                <Button variant="ghost" size="sm" onClick={leaveStream} className="text-slate-400 hover:text-white">
                    <LogOut className="mr-2 h-4 w-4" />
                    Leave
                </Button>
            </header>

            <main className="w-full max-w-md flex flex-col items-center gap-8 mt-8">
                <Card className="w-full aspect-video flex flex-col items-center justify-center p-8 gap-4 bg-slate-900/50 border-slate-800">
                    <div className={cn(
                        "h-20 w-20 rounded-full flex items-center justify-center transition-all duration-300",
                        isMicMuted ? "bg-slate-800 text-slate-500" : "bg-blue-600/20 text-blue-400 animate-pulse"
                    )}>
                        {isMicMuted ? <MicOff className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
                    </div>
                    <div className="text-center">
                        <h2 className="text-lg font-semibold text-white">Broadcaster is {isMicMuted ? "Muted" : "Live"}</h2>
                        <p className="text-sm text-slate-500">You are listening to the stream</p>
                    </div>
                </Card>

                <UserList users={connectedUsers} />
            </main>
        </div>
    )
}
