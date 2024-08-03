# Todo List Application

This is a simple Todo List application built with Next.js. It allows users to create, update, delete, and search tasks. The application demonstrates server-side rendering (SSR), URL parameter handling, and a responsive design using Tailwind CSS.

## Overview

The Todo List application is designed to help users manage their tasks efficiently. Users can:
- Add new tasks
- Update existing tasks
- Delete tasks
- Mark tasks as completed
- Search for tasks

The application features an intuitive user interface and leverages Next.js for server-side rendering and routing.

## System Design

### Components

1. **TaskForm**: A form component that allows users to add new tasks.
2. **TaskList**: A component that displays a list of tasks. It supports updating, deleting, and toggling tasks.
3. **Page**: The main page component that contains the TaskForm and TaskList components, handles search functionality, and manages the application's state.

### Data Management

The application uses local state management with React's `useState` hook to manage tasks and search terms. Initially, tasks are loaded from a static JSON file (`tasks.json`).

### Routing and URL Parameters

Next.js's `useRouter` hook is used for handling URL parameters and navigation. The search term is extracted from the URL query parameters to filter the tasks.

## Implementation

### File Structure

/app
/components
TaskForm.tsx
TaskList.tsx
/pages
index.tsx
tasks.json



### Key Files

- `app/pages/index.tsx`: The main page component that includes the TaskForm and TaskList components and handles the application's state.
- `app/components/TaskForm.tsx`: The form component for adding new tasks.
- `app/components/TaskList.tsx`: The component for displaying, updating, deleting, and toggling tasks.
- `app/tasks.json`: A static JSON file containing initial task data.

### Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/todo-list-app.git
cd todo-list-app

### Install Dependencies
npm install

### Run the Application
npm run dev


### Open in Browser
Open your browser and go to http://localhost:3000 to see the application in action.


Feel free to modify this as per your specific implementation details.
