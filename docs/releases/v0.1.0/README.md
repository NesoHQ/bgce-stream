# BGCE Stream v0.1.0 (Audio Rooms MVP)

## Goals
- One-click room creation with a unique, shareable link
- Join by link and start streaming immediately
- Browser-only audio processing toggles: AGC, Noise Suppression, Music Mode
- Preserve audio richness using WebRTC/Opus tuning
- Designed for small-to-medium "bhai-brother" groups

## Scope
- WebRTC P2P mesh (no SFU) with JSON signaling over `/ws`
- REST API for room lifecycle
- No UI overhaul; minimal pages and controls

## API
- POST `/api/rooms` → `{ roomId, joinUrl }`
- GET `/api/rooms/{roomId}` → `{ exists: boolean }`
- WS `/ws` → JSON messages: `join-room`, `offer`, `answer`, `candidate`, `leave`

## Signaling Messages (examples)
```json
{"type":"join-room","roomId":"abc","peerId":"peer-1"}
{"type":"offer","roomId":"abc","peerId":"peer-1","targetPeerId":"peer-2","sdp":"..."}
{"type":"candidate","roomId":"abc","peerId":"peer-1","targetPeerId":"peer-2","candidate":{}}
```

## Audio Presets
- Voice: echoCancellation, autoGainControl, noiseSuppression (all true)
- Music: disable EC/AGC/NS, prefer stereo, higher bitrate

## Contributing
See [Contributing Guide](../CONTRIBUTING.md) for detailed contribution workflow.

## Acceptance Criteria
- Create room, share link, join and stream between 3–5 peers
- Toggles apply to outbound track immediately
