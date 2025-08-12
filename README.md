# Quick Chat - Real-Time Chat Application

A modern, full-stack chat application built with the MERN stack, featuring real-time messaging, user authentication, and media sharing capabilities.

### Link - https://chat-application-khaki-five.vercel.app/login

## ✨ Features

- **Real-time Messaging**: Instant message delivery using Socket.io
- **User Authentication**: Secure signup/login with JWT tokens
- **Online Status**: See who's online in real-time
- **Media Sharing**: Share images seamlessly in conversations
- **User Profiles**: Customizable user profiles with avatars and bio
- **Message Status**: Track unseen messages with notification badges
- **Responsive Design**: Beautiful UI that works on all devices
- **Search Users**: Find and start conversations with other users
- **Smooth Animations**: Enhanced UX with smooth transitions

## 🚀 Tech Stack

### Frontend
- **React.js** - UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Socket.io Client** - Real-time communication
- **React Hot Toast** - Beautiful notifications
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Socket.io** - Real-time bidirectional communication
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Cloudinary** - Image storage and management

## 🎯 Usage

1. **Sign Up**: Create a new account with your details
2. **Login**: Access your account with email and password
3. **Start Chatting**: Select a user from the sidebar to begin conversation
4. **Send Messages**: Type and send text messages instantly
5. **Share Images**: Click the gallery icon to share images
6. **Profile Management**: Update your profile picture and bio
7. **Online Status**: See who's currently online

## 🔧 API Endpoints

### Authentication Routes
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/check` - Verify authentication
- `PUT /api/auth/update-profile` - Update user profile

### Message Routes
- `GET /api/messages/users` - Get all users for sidebar
- `GET /api/messages/:id` - Get messages with specific user
- `POST /api/messages/send/:id` - Send message to user
- `GET /api/messages/mark/:id` - Mark message as seen

## 🌟 Key Features Implementation

### Real-time Communication
- Socket.io for instant message delivery
- Online user status tracking
- Message seen/unseen status

### Security
- JWT token-based authentication
- Password hashing with bcryptjs
- Protected routes middleware

### File Upload
- Cloudinary integration for image storage
- Base64 image processing
- Optimized image delivery

### State Management
- React Context API for global state
- Separate contexts for authentication and chat
- Persistent user sessions

