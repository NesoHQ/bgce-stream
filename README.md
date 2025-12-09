
## Backend Integration Notes

To transform this frontend into a fully functional streaming application, the backend must handle the following events and data flow:

### Socket Events
- **`join-stream`**: Payload `{ username: string, role: string }`. Server should add user to the room and broadcast update.
- **`start-broadcast`**: Server marks the stream as live.
- **`end-broadcast`**: Server cleans up room and notifies listeners.
- **`toggle-mic`**: Payload `{ isMuted: boolean }`. Server broadcasts this state to all listeners to update their UI.
- **`user-joined` / `user-left`**: Broadcast to all clients to update the `UserList`.

### WebRTC / Streaming
- **Signaling Server**: Implement Webrtc signaling (offer, answer, ice-candidate exchanges).
- **Media Server (Optional)**: For scaling to many listeners, use an SFU (Selective Forwarding Unit) like meediasoup or Janus instead of mesh networking.

### API Endpoints (Optional)
- **`GET /api/status`**: To check if a broadcast is currently live before joining.
