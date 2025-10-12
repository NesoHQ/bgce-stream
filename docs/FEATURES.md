# Features

This document outlines the key features of BGCE Stream, a real-time audio streaming platform for communities.

## Core Features

### One-Click Room Creation
**Problem Solved**: Users need a simple way to create audio rooms without complex setup or registration.

**Solution Overview**: Instant room creation with unique, shareable links that work immediately.

**User Flow**:
1. User clicks "Create Room" button
2. System generates unique room ID and shareable link
3. User shares link with community members
4. Members join instantly without registration

**Technical Details**:
- **Implementation**: REST API endpoint with UUID generation
- **Dependencies**: Go backend, WebSocket signaling
- **Non-Functional**: < 2 seconds room creation time

**Acceptance Criteria**:
- [ ] Room created in under 2 seconds
- [ ] Unique room ID generated for each request
- [ ] Shareable link works across different browsers
- [ ] No user registration required

**Status & Roadmap**:
- **Current**: Implemented
- **Version**: v0.1.0
- **Next**: Add room persistence and cleanup in v0.1.1

### WebRTC P2P Audio Streaming
**Problem Solved**: Communities need high-quality, low-latency audio streaming without server-side media processing.

**Solution Overview**: Direct peer-to-peer audio connections using WebRTC for optimal performance and privacy.

**User Flow**:
1. User joins room via shareable link
2. Browser requests microphone permission
3. WebRTC establishes P2P connections with other peers
4. Audio streams directly between users

**Technical Details**:
- **Implementation**: WebRTC with WebSocket signaling
- **Dependencies**: Browser WebRTC support, WebSocket server
- **Non-Functional**: < 200ms audio latency, supports 3-5 concurrent users

**Acceptance Criteria**:
- [ ] Audio latency under 200ms between peers
- [ ] Supports 3-5 concurrent users per room
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari)
- [ ] Automatic connection recovery on network issues

**Status & Roadmap**:
- **Current**: Implemented
- **Version**: v0.1.0
- **Next**: Add connection health monitoring in v0.1.1

### Browser-Native Audio Processing
**Problem Solved**: Users need control over audio quality and processing without complex software installation.

**Solution Overview**: Built-in audio processing controls using browser's native Web Audio API.

**User Flow**:
1. User joins audio room
2. Audio processing panel appears
3. User toggles AGC, noise suppression, or music mode
4. Changes apply immediately to outgoing audio

**Technical Details**:
- **Implementation**: Web Audio API with WebRTC constraints
- **Dependencies**: Browser Web Audio API support
- **Non-Functional**: Real-time processing, no server-side audio handling

**Acceptance Criteria**:
- [ ] Automatic Gain Control (AGC) toggle works
- [ ] Noise Suppression toggle works
- [ ] Music Mode enhances instrument tones
- [ ] All processing happens client-side

**Status & Roadmap**:
- **Current**: Implemented
- **Version**: v0.1.0
- **Next**: Add advanced audio controls in v0.2.0

## Upcoming Features

### Room Persistence & Management
**Problem Solved**: Accidental room loss when users disconnect temporarily.

**Solution Overview**: Short-term room persistence with automatic cleanup.

**User Flow**:
1. Room created with configurable TTL
2. Room persists for set duration even if creator leaves
3. Automatic cleanup after TTL expires
4. Users can rejoin within TTL window

**Technical Details**:
- **Implementation**: Redis-based room storage with TTL
- **Dependencies**: Redis server, room management API
- **Non-Functional**: 5-minute default TTL, configurable per room

**Acceptance Criteria**:
- [ ] Rooms persist for configurable duration
- [ ] Automatic cleanup after TTL
- [ ] Users can rejoin within TTL window
- [ ] No memory leaks from abandoned rooms

**Status & Roadmap**:
- **Current**: Planned
- **Version**: v0.1.1
- **Next**: Add room password protection in v0.2.0

### Basic Moderation Tools
**Problem Solved**: Room creators need control over disruptive users.

**Solution Overview**: Simple moderation controls for room management.

**User Flow**:
1. Room creator sees list of connected users
2. Creator can mute or kick specific users
3. Actions apply immediately to target user
4. Kicked users cannot rejoin same room

**Technical Details**:
- **Implementation**: WebSocket signaling for moderation commands
- **Dependencies**: User session management, WebSocket server
- **Non-Functional**: Real-time moderation actions

**Acceptance Criteria**:
- [ ] Room creator can see connected users
- [ ] Mute/unmute functionality works
- [ ] Kick functionality works
- [ ] Kicked users cannot rejoin

**Status & Roadmap**:
- **Current**: Planned
- **Version**: v0.2.0
- **Next**: Add advanced permissions system in v0.3.0

### Client-Side Recording
**Problem Solved**: Users want to record audio sessions for later review or sharing.

**Solution Overview**: Browser-based recording using MediaRecorder API.

**User Flow**:
1. User clicks record button
2. Browser records audio stream locally
3. User can stop recording and download file
4. Recording stored locally, not on server

**Technical Details**:
- **Implementation**: MediaRecorder API with WebM/MP4 output
- **Dependencies**: Browser MediaRecorder support
- **Non-Functional**: Local storage only, no server upload

**Acceptance Criteria**:
- [ ] Record button starts/stops recording
- [ ] Audio recorded in standard format
- [ ] Download functionality works
- [ ] No server-side storage required

**Status & Roadmap**:
- **Current**: Planned
- **Version**: v0.2.0
- **Next**: Add cloud storage option in v0.3.0

## Future Features

### SFU Integration
**Problem Solved**: Scale beyond 5 users per room with better performance.

**Solution Overview**: Optional Selective Forwarding Unit for larger rooms.

**Technical Details**:
- **Implementation**: LiveKit/mediasoup/ion-sfu integration
- **Dependencies**: SFU server infrastructure
- **Non-Functional**: Support for 20+ concurrent users

### Mobile Applications
**Problem Solved**: Native mobile experience for audio streaming.

**Solution Overview**: React Native or Flutter apps for iOS/Android.

**Technical Details**:
- **Implementation**: Cross-platform mobile framework
- **Dependencies**: Mobile WebRTC libraries
- **Non-Functional**: Native mobile performance

### Spatial Audio
**Problem Solved**: More immersive audio experience for music communities.

**Solution Overview**: 3D audio positioning for virtual spaces.

**Technical Details**:
- **Implementation**: Web Audio API spatial processing
- **Dependencies**: Advanced Web Audio features
- **Non-Functional**: Real-time spatial audio processing

## Contribution Notes

Help wanted? We welcome contributions for:
- Testing new features
- Improving audio quality
- Adding new audio processing options
- Mobile app development
- Documentation improvements

See [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute.