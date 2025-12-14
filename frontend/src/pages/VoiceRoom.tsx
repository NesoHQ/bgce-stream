import { useParams, useNavigate } from 'react-router-dom';
import { useMockRoom } from '@/hooks/useMockRoom';
import { ControlBar } from '@/components/room/ControlBar';
import { UserList } from '@/components/room/UserList';
import { ChatArea } from '@/components/room/ChatArea';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users } from 'lucide-react';

const VoiceRoom = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // In Voice Room, everyone is a participant
    const {
        me,
        users,
        messages,
        toggleMic,
        sendMessage
    } = useMockRoom(id || 'default', 'voice', 'participant');

    return (
        <div className="flex flex-col h-[calc(100vh-65px)] bg-background">
            <div className="flex-1 flex overflow-hidden relative">

                {/* Main Grid */}
                <div className="flex-1 p-6 overflow-y-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {users.map((user) => (
                            <div key={user.id} className="aspect-square bg-muted/30 rounded-2xl flex flex-col items-center justify-center relative border-2 border-transparent transition-all hover:bg-muted/50">
                                {user.isSpeaking && !user.isMuted && (
                                    <div className="absolute inset-0 border-2 border-green-500 rounded-2xl animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.3)]" />
                                )}
                                <Avatar className="h-24 w-24 mb-4">
                                    <AvatarImage src={user.avatar} />
                                    <AvatarFallback className="text-2xl">{user.name[0]}</AvatarFallback>
                                </Avatar>
                                <span className="font-semibold">{user.name}</span>
                                {user.isMuted && <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full mt-2">Muted</span>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile/Desktop Drawers for Chat/Users (Different from Stream Layout for variety) */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline"><MessageSquare className="h-5 w-5" /></Button>
                        </SheetTrigger>
                        <SheetContent className="w-[85%] sm:w-[350px] p-0">
                            <ChatArea messages={messages} onSendMessage={sendMessage} />
                        </SheetContent>
                    </Sheet>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline"><Users className="h-5 w-5" /></Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[85%] sm:w-[350px] p-0">
                            <UserList users={users} currentUser={me} />
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Desktop Sidebar (Optional, maybe just keep grid focused? No, need chat in voice room too) */}
                <div className="hidden md:flex w-[350px] border-l flex-col bg-background">
                    <ChatArea messages={messages} onSendMessage={sendMessage} />
                </div>

            </div>

            <ControlBar
                user={me}
                status={'live'} // Voice rooms are always "live" effectively
                onToggleMic={toggleMic}
                onLeave={() => navigate('/')}
            />
        </div>
    );
};

export default VoiceRoom;
