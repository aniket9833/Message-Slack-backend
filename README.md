# Frontend Link 
[Github url](https://github.com/aniket9833/Message-Slack-frontend)

## Slack API Integration

### Overview
Developed an end-to-end Slack API integration for workspace creation.

### Features
- **Authentication & User Management**: Implemented secure authentication, allowing members to join workspaces.
- **Real-time Chat**: Integrated WebSockets for seamless communication.
- **File Sharing**: Enabled file uploads within channels and direct messages using AWS S3 with presigned URLs.
- **Channel Management**: Designed features to create and manage channels.

### Technologies Used
- **Backend**: Node.js, Express.js
- **Frontend**: React.js
- **Database**: MongoDB
- **Real-time Communication**: Socket.IO
- **UI Components**: shadcn
- **Cloud Storage**: AWS S3

### Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/aniket9833/Message-Slack-backend.git
   ```
2. Install dependencies:
   ```sh
   cd backend
   npm install
   cd ../frontend
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the backend directory and add necessary credentials (DB connection, API keys, etc.).
4. Start the development server:
   ```sh
   cd backend
   npm start
   ```
   ```sh
   cd frontend
   npm run dev
   ```
