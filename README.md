# Mood Tracker

A full-stack mood tracking application built with:

- ASP.NET Core Web API
- Entity Framework Core
- SQLite
- React + Vite
- SVG-based mood rendering

---

# Features

- Log moods
- Persist data with SQLite
- View last 7 entries
- Animated timeline
- Responsive UI
- SVG-rendered expressions

---

# Tech Stack

## Backend
- ASP.NET Core 8
- EF Core
- SQLite

## Frontend
- React
- Vite
- Axios

---

# Setup Instructions

## Backend

cd backend/MoodTracker.Api

dotnet restore

dotnet ef database update

dotnet run

---

## Frontend

cd frontend

npm install

npm run dev

---

# API Endpoints

## POST /api/mood

Create mood entry.

### Example

{
  "moodType": "happy",
  "note": "Great day"
}

---

## GET /api/mood

Returns latest 7 entries.

---

# Architecture

Frontend:
React → Hooks → Axios → API

Backend:
Controller → Service → EF Core → SQLite

---

# Future Improvements

- Authentication
- Charts & analytics
- Mood trends
- Calendar view
- Dark mode
- PostgreSQL migration