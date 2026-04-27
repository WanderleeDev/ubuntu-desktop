# Backend Requirements - Ubuntu Desktop Web

This document outlines the necessary endpoints and features required for the backend to support the Ubuntu Desktop Web application.

## 🚀 Core Features
The backend should provide a RESTful API (or similar) to handle data persistence for the various desktop applications.

### 1. ToDo Application (CRUD)
**Endpoints:**
- `GET /api/todos`: Retrieve all tasks for the current user.
- `POST /api/todos`: Create a new task.
- `PUT /api/todos/:id`: Update a task's content or status (`pending`, `completed`).
- `DELETE /api/todos/:id`: Remove a specific task.
- `DELETE /api/todos`: Clear all tasks (reset).

**Data Model (Task):**
- `id`: UUID / String
- `task`: String
- `status`: Enum (`pending`, `completed`)
- `userId`: Reference to User

---

### 2. System Settings & Personalization
Handles wallpaper selection, accent colors, and system-wide toggles.

**Endpoints:**
- `GET /api/settings`: Retrieve the current user's desktop configuration.
- `PATCH /api/settings`: Update specific settings (accent color, do not disturb, etc.).
- `GET /api/wallpapers`: List all available wallpaper URLs and metadata.

**Settings State:**
- `currentWallpaper`: String (URL)
- `accentColor`: String (CSS Variable/Hex)
- `doNotDisturb`: Boolean
- `lockScreenNotifications`: Boolean

---

### 3. Application Management
Serves the list of available applications and their metadata.

**Endpoints:**
- `GET /api/apps`: List all installed/available applications for the desktop.

**App Metadata:**
- `id`: String
- `name`: String
- `icon`: String (URL/Path)
- `description`: String
- `category`: String

---

### 4. Code Editor (Playground)
Persistence for the live code editor.

**Endpoints:**
- `GET /api/projects`: List user's code projects.
- `GET /api/projects/:id`: Load a specific project's files (HTML, CSS, JS).
- `POST /api/projects`: Save a new project.
- `PUT /api/projects/:id`: Update an existing project.

---

### 5. Media (Video Player)
Serves media content metadata.

**Endpoints:**
- `GET /api/videos`: Retrieve the default playlist or user-uploaded videos.

---

## 🛠 Tech Stack Recommendations
Based on the existing repository structure:
- **Framework**: Hono, Express, or NestJS (as seen in `package.json` if available).
- **ORM**: Drizzle ORM (already initialized).
- **Database**: PostgreSQL or SQLite (compatible with Drizzle).
- **Auth**: JWT or Session-based auth to separate user data.

## 🔒 Security Requirements
- **Authentication**: JWT or Session-based auth to separate user data.
- **CORS**: Correctly configured to allow requests from the frontend origin.
- **Validation**: Input validation for all POST/PUT requests.
