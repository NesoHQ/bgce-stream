import { LogOut } from "lucide-react"
import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/Card"
import { MicControl } from "../components/features/MicControl"
import { UserList } from "../components/features/UserList"
import { StatusIndicator } from "../components/features/StatusIndicator"
import { useStreamStore } from "../store/useStreamStore"
import { cn } from "../lib/utils"

export function BroadcasterView() {
    const {
        currentUser,
        streamStatus,
        isMicMuted,
        connectedUsers,
        toggleMic,
        leaveStream
    } = useStreamStore()

    return (
        <div className="flex flex-col items-center min-h-screen p-4 gap-8 animate-in fade-in duration-500">
            <header className="w-full max-w-4xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <StatusIndicator status={streamStatus} />
                    {currentUser && (
                        <span className="text-sm text-slate-400">
                            Broadcasting as <span className="text-white font-medium">{currentUser.name}</span>
                        </span>
                    )}
                </div>
                <Button variant="ghost" size="sm" onClick={leaveStream} className="text-red-400 hover:text-red-300 hover:bg-red-950/30">
                    <LogOut className="mr-2 h-4 w-4" />
                    End Stream
                </Button>
            </header>

            <main className="w-full max-w-md flex flex-col items-center gap-8 mt-8">
                <Card className={cn(
                    "w-full aspect-square flex items-center justify-center p-8 transition-all duration-500",
                    !isMicMuted ? "shadow-2xl shadow-blue-500/20 border-blue-500/30 bg-gradient-to-b from-slate-900 to-slate-950" : "bg-slate-950"
                )}>
                    <MicControl
                        isMuted={isMicMuted}
                        onToggle={toggleMic}
                    />
                </Card>

                <UserList users={connectedUsers} />
            </main>
        </div>
    )
}
