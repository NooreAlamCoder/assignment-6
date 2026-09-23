# FitLog — Workout Library

FitLog is a modern workout library and planning application built with Next.js. It helps users discover workouts, view detailed exercise information, build a daily workout plan, and save workouts for later.

## Live Project

[Add your live Vercel link here]

## GitHub Repository

https://github.com/NooreAlamCoder/assignment-6

## Project Description

FitLog is a dark-themed workout library designed for users who want a simple and focused way to explore exercises and organize their daily workouts.

Users can browse workout exercises, check detailed workout information, add exercises to today's plan, save exercises for later, and manage their workout list from the My Plan page.

## Technologies Used

- Next.js
- React
- JavaScript
- Tailwind CSS
- DaisyUI
- React Toastify
- REST API
- Next.js App Router

## Key Features

- Browse all available workouts from the FitLog API.
- View detailed information for each workout.
- See muscle groups, equipment, difficulty, sets, reps, duration, calories, rating, and instructions.
- Add workouts to today's plan.
- Today's plan supports a maximum of 5 workouts.
- Save workouts for later.
- Remove workouts from the plan or saved list.
- Mark workouts as completed.
- Sort workouts by duration, calories, or rating.
- Live Plan and Saved counters in the navbar.
- Toast notifications for user actions.
- Responsive design for mobile, tablet, and desktop.
- Custom loading state while workout data is loading.
- Custom 404 page for invalid routes.
- Dynamic workout details pages.
- Reusable React components.
- Context API for managing workout plan and saved workout state.

## API Used

### All Workouts

https://api.abcz.workers.dev/api/fitlog

### Single Workout

https://api.abcz.workers.dev/api/fitlog/:id

## Main Pages

### Home

The home page contains:

- Navbar
- Hero section
- Workout Library
- Workout cards
- Workout statistics

### Workout Details

Each workout has a dynamic details page containing:

- Workout image
- Workout name
- Description
- Muscle groups
- Equipment
- Difficulty
- Sets
- Reps
- Duration
- Calories
- Rating
- Instructions
- Add to today's plan button
- Save for later button

### My Plan

The My Plan page contains:

- Today's Plan
- Saved workouts
- Exercise count
- Total workout minutes
- Total calories
- Sorting options
- View Details
- Mark as Done
- Remove workout
- Empty state

## Project Structure

src/
├── app/
│   ├── workouts/
│   │   └── [id]/
│   │       ├── page.jsx
│   │       └── loading.jsx
│   ├── my-plan/
│   │   └── page.jsx
│   ├── loading.jsx
│   ├── not-found.jsx
│   ├── layout.js
│   ├── page.js
│   └── globals.css
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── WorkoutCard.jsx
│   ├── WorkoutActions.jsx
│   ├── MyPlanCard.jsx
│   └── ToastProvider.jsx
│
├── context/
│   └── FitLogContext.jsx
│
└── lib/
    └── api.js

## How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/NooreAlamCoder/assignment-6.git

2. Go to the project folder
cd assignment-6
3. Install dependencies
npm install
4. Start the development server
npm run dev
5. Open the project

Open the following URL in your browser:

http://localhost:3000

Available Scripts
Development
npm run dev
Production Build
npm run build
Start Production Server
npm start
Lint
npm run lint
Responsive Design

FitLog is designed to work across:

Mobile devices
Tablets
Laptops
Desktop screens

The layout adapts to different screen sizes while maintaining the dark FitLog visual style.

User Experience

FitLog provides instant feedback through toast notifications when users:

Add a workout to today's plan
Save a workout
Try to add a duplicate workout
Try to exceed the 5-workout plan limit
Remove a workout
Mark a workout as completed
Design

The application uses a dark fitness-focused interface with:

Dark background
Lime accent color
Compact workout cards
Rounded borders
Responsive layouts
Bold uppercase headings
Minimal and focused UI
Deployment

The project can be deployed using Vercel.

After deployment, add the live website URL to the Live Project section above.

Assignment

This project was created as part of Programming Hero Assignment 6.

Author

Built by Noore Alam