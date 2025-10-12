# BGCE Stream Backend

A Go-based backend service for the BGCE Stream application.

## 🚀 Quick Start

### Prerequisites
- Go 1.19 or higher
- Git

### Installation Steps

1. **Clone and navigate to the project:**
   ```bash
   cd /mnt/sda1/bgce-stream/backend
   ```

2. **Initialize Go module:**
   ```bash
   go mod init bgce-stream-backend
   ```

3. **Install dependencies:**
   ```bash
   go mod tidy
   ```

4. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env file with your configuration
   ```

5. **Run the server:**
   ```bash
   go run main.go
   ```

6. **Test the server:**
   ```bash
   curl http://localhost:8080/health
   ```

## 📁 Project Structure

```
backend/
├── main.go              # Main application entry point
├── .env.example         # Environment variables template
├── .gitignore          # Git ignore rules
├── go.mod              # Go module file
├── go.sum              # Go dependencies checksum
└── README.md           # This file
```

## 🔧 Configuration

The application uses environment variables for configuration. Copy `.env.example` to `.env` and modify as needed:

- `PORT`: Server port (default: 8080)
- `GIN_MODE`: Gin framework mode (debug/release)

## 📡 API Endpoints

### Health Check
- `GET /health` - Server health status

### API v1
- `GET /api/v1/status` - API status and version

## 🛠 Development

### Adding Dependencies
```bash
go get github.com/package-name
go mod tidy
```

### Running in Development
```bash
go run main.go
```

### Building for Production
```bash
go build -o bgce-stream-backend main.go
./bgce-stream-backend
```

## 🔄 Next Steps

1. Add database integration (PostgreSQL/MySQL)
2. Implement authentication (JWT)
3. Add API endpoints for your specific use case
4. Add logging and monitoring
5. Add tests
6. Set up CI/CD pipeline

## 📝 License

[Add your license here]
