<<<<<<< Updated upstream
# bgce-stream
One-click music streaming service for communities, enabling high-quality audio sharing with noise filtering and music mode
=======
# BGCE Stream

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Go Version](https://img.shields.io/badge/Go-1.19%2B-blue.svg)](https://golang.org/)
[![WebRTC](https://img.shields.io/badge/WebRTC-Supported-green.svg)](https://webrtc.org/)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)](CONTRIBUTING.md)

> **Simple audio streaming for small communities** - Create rooms instantly, share links, and start streaming music or voice with friends.

## 🎵 What is BGCE Stream?

BGCE Stream is a lightweight, browser-based audio streaming platform designed for small-to-medium communities ("bhai-brother" groups). It enables instant room creation, shareable links, and high-quality audio streaming without complex setup or UI overhauls.

### Key Features

- 🚀 **One-click room creation** - Generate unique, shareable links instantly
- 🎤 **Simple streaming experience** - Just click and stream
- 🎛️ **Audio enhancement** - Automatic gain control, noise filtering, and music mode
- 🔊 **Preserve audio richness** - Not compressed like standard voice calls
- 🌐 **Browser-based** - No downloads, works on any modern browser
- 👥 **Community-focused** - Designed for small groups (3-5 users)

## 🚀 Quick Start

### Prerequisites

- **Backend**: Go 1.19 or higher
- **Frontend**: Modern web browser with WebRTC support
- **Network**: Stable internet connection

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/bgce-stream.git
   cd bgce-stream
   ```

2. **Start the backend server**:
   ```bash
   cd backend
   go mod tidy
   go run ./cmd/server
   ```

3. **Open the frontend**:
   ```bash
   cd frontend
   # Use any static file server, e.g.:
   python -m http.server 3000
   # or
   npx serve public
   ```

4. **Access the application**:
   - Open `http://localhost:3000` in your browser
   - Click "Create Room" to get started

## 📖 Documentation

- **[Contributing Guide](docs/CONTRIBUTING.md)** - How to contribute to the project
- **[Roadmap](docs/ROADMAP.md)** - Development plans and upcoming features
- **[v0.1.0 Release Notes](docs/releases/v0.1.0/README.md)** - Current MVP features
- **[Backend README](backend/README.md)** - Backend-specific documentation

<!-- ## 🏗️ Architecture

### Backend (Go)
- **REST API** for room management
- **WebSocket signaling** for WebRTC peer connections
- **Room management** with automatic cleanup
- **CORS support** for cross-origin requests

### Frontend (Vanilla JavaScript)
- **WebRTC P2P mesh** for direct peer connections
- **Web Audio API** for audio processing
- **Responsive design** for desktop and mobile
- **Progressive enhancement** for browser compatibility

### Audio Processing
- **Automatic Gain Control (AGC)** - Adjusts volume automatically
- **Noise Suppression** - Reduces background noise
- **Music Mode** - Enhanced settings for instrument tones
- **High-quality audio** - Preserves audio richness via Opus tuning

## 🎯 Use Cases

- **Music jamming sessions** - Share and play music together
- **Voice chats** - High-quality voice conversations
- **Online rehearsals** - Practice sessions with band members
- **Community meetings** - Small group discussions
- **Gaming voice chat** - Low-latency audio for gaming -->

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](docs/CONTRIBUTING.md) for details.

## 📋 Roadmap

See [Roadmap](docs/ROADMAP.md) for detailed development plans and upcoming features.

## 🛠️ Technology Stack

### Backend
- **Go** - High-performance server
- **Gorilla WebSocket** - WebSocket implementation
- **Standard Library** - Minimal dependencies

### Frontend
- **Vanilla JavaScript** - No frameworks
- **WebRTC** - Peer-to-peer connections
- **Web Audio API** - Audio processing
- **CSS3** - Modern styling

### Infrastructure
- **GitHub** - Version control and collaboration
- **GitHub Actions** - CI/CD (planned)
- **Docker** - Containerization (planned)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **WebRTC community** - For the amazing real-time communication technology
- **Go community** - For the excellent ecosystem and tools
- **Contributors** - Everyone who helps make this project better
- **Users** - For feedback and support

## 📞 Support

- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - Questions and general discussion
- **Email** - [Contact maintainers](mailto:rahim.cse.diu@gmail.com)

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=your-username/bgce-stream&type=Date)](https://star-history.com/#your-username/bgce-stream&Date)

---

### Made with ❤️ for the community
>>>>>>> Stashed changes
