# Task Manager

A comprehensive task management application built with Next.js, TypeScript, and Shadcn UI.

## Features

- **User Authentication**: Secure login and registration system
- **Task Management**: Create, view, update, and delete tasks
- **User Management**: Admin panel for managing users and roles
- **Modern UI**: Beautiful interface built with Shadcn UI components
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **UI Components**: Shadcn UI, Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: Prisma with SQLite
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd task-manager
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Generate a NextAuth secret:
```bash
openssl rand -base64 32
```
Add the generated secret to your `.env.local` file.

5. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

6. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   ├── tasks/         # Task management endpoints
│   │   └── users/         # User management endpoints
│   ├── auth/              # Authentication pages
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   ├── auth/             # Authentication components
│   ├── tasks/            # Task management components
│   ├── users/            # User management components
│   └── dashboard/        # Dashboard components
├── contexts/             # React contexts
├── lib/                  # Utility functions and configurations
├── types/                # TypeScript type definitions
└── hooks/                # Custom React hooks
```

## Features Overview

### Authentication
- User registration and login
- Secure password hashing with bcrypt
- Session management with NextAuth.js
- Role-based access control (Admin/User)

### Task Management
- Create tasks with title, description, priority, and due date
- View all tasks in a clean, organized list
- Update task status (Todo, In Progress, Done, Cancelled)
- Delete tasks
- Priority levels (Low, Medium, High, Urgent)

### User Management (Admin Only)
- View all users
- Create new users
- Update user roles
- Delete users
- Search functionality

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/[...nextauth]` - NextAuth.js endpoints

### Tasks
- `GET /api/tasks` - Get all tasks for the current user
- `POST /api/tasks` - Create a new task
- `PATCH /api/tasks/[id]` - Update a task
- `DELETE /api/tasks/[id]` - Delete a task

### Users (Admin Only)
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
- `PATCH /api/users/[id]` - Update a user
- `DELETE /api/users/[id]` - Delete a user

## Database Schema

The application uses Prisma with SQLite for data persistence. The schema includes:

- **User**: User accounts with authentication and role information
- **Task**: Task entities with status, priority, and due date
- **Account/Session**: NextAuth.js session management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.


