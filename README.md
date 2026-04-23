# St Joseph's World Book Day Quiz Application

## Features
- Interactive quiz interface
- Real-time updates with Socket.io
- User authentication
- Scoring and leaderboard system
- Question bank management

## Tech Stack
- **Frontend**: React.js, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-time Communication**: Socket.io

## Getting Started
### Prerequisites
- Node.js (version 14 or later)
- MongoDB installed and running

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/jaswanthredmi888/Quiz-app.git
   cd Quiz-app
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```
4. In a separate terminal, start the frontend:
   ```bash
   cd client
   npm start
   ```

## Project Structure
```
Quiz-app/
├── client/         # Frontend code
├── server/         # Backend code
├── README.md       # Documentation
└── package.json    # Node dependencies
```

## API Endpoints
- **GET /api/questions** - Retrieve all questions
- **POST /api/questions** - Add a new question
- **POST /api/score** - Submit a score
- **GET /api/leaderboard** - Get the leaderboard

## Socket.io Events
- **connect** - When a user connects to the server
- **disconnect** - When a user disconnects
- **new-question** - Event emitted when a new question is broadcasted
- **update-score** - Event to update user scores on the client side

## Troubleshooting
- If you encounter issues with Socket.io connection, ensure that the server is running and the correct ports are opened.
- Common deployment issues can often be resolved by checking firewall settings and ensuring that your environment variables are set correctly.

## Deployment Instructions
1. Choose a hosting service (e.g., Heroku, AWS).
2. Set up your environment variables on the hosting service.
3. Deploy your application following the service's guidelines.
4. Verify that your app is live and accessible.

For further information, refer to each section and explore the resources provided within the documentation.