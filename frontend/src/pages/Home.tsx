import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mic, Radio, Users, ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [roomCode, setRoomCode] = useState("");

    const handleJoin = (e: React.FormEvent) => {
        e.preventDefault();
        if (roomCode.trim()) {
            // Logic to determine type would normally be here, but for now we might route to stream by default or ask.
            // Or we assume the user knows what they are joining.
            navigate(`/stream/${roomCode}`);
        }
    };

    const createRoom = (type: 'stream' | 'voice') => {
        const newId = Math.random().toString(36).substring(7);
        navigate(`/${type}/${newId}`);
    };

    return (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
            <div className="mb-12 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent pb-2">
                    Connect with Voice.
                </h1>
                <p className="text-muted-foreground text-xl md:text-2xl max-w-2xl mx-auto">
                    Create immersive audio streams or jump into voice chats instantly. High quality, low latency, and built for communities.
                </p>
            </div>

            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
                {/* Create Room Section */}
                <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                            <Radio className="h-6 w-6 text-primary" />
                            Start Broadcasting
                        </CardTitle>
                        <CardDescription className="text-base">
                            Host your own audio stream or voice room.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="stream" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-4">
                                <TabsTrigger value="stream">Stream</TabsTrigger>
                                <TabsTrigger value="voice">Voice Chat</TabsTrigger>
                            </TabsList>
                            <TabsContent value="stream" className="space-y-4">
                                <div className="bg-muted/50 p-4 rounded-lg text-sm text-left space-y-2">
                                    <p className="flex items-center gap-2"><Mic className="h-4 w-4" /> You are the Streamer</p>
                                    <p className="flex items-center gap-2"><Users className="h-4 w-4" /> Listeners (Unlimited)</p>
                                </div>
                                <Button className="w-full" size="lg" onClick={() => createRoom('stream')}>
                                    Create Stream
                                </Button>
                            </TabsContent>
                            <TabsContent value="voice" className="space-y-4">
                                <div className="bg-muted/50 p-4 rounded-lg text-sm text-left space-y-2">
                                    <p className="flex items-center gap-2"><Mic className="h-4 w-4" /> Everyone can speak</p>
                                    <p className="flex items-center gap-2"><Users className="h-4 w-4" /> Peer-to-peer / Group</p>
                                </div>
                                <Button className="w-full" variant="secondary" size="lg" onClick={() => createRoom('voice')}>
                                    Create Voice Room
                                </Button>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>

                {/* Join Room Section */}
                <Card className="h-full border-2 hover:border-primary/50 transition-colors flex flex-col justify-center">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                            <Users className="h-6 w-6 text-primary" />
                            Join a Room
                        </CardTitle>
                        <CardDescription className="text-base">
                            Enter a code to join an existing session.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleJoin} className="space-y-4">
                            <Input
                                placeholder="Enter Room Code..."
                                className="text-center text-lg h-12"
                                value={roomCode}
                                onChange={(e) => setRoomCode(e.target.value)}
                            />
                            <Button className="w-full" size="lg" type="submit" disabled={!roomCode}>
                                Join Now <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Home;
