"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import tasksData from '../tasks.json';

const Page = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const initialSearchTerm = query.get('search') || '';
    setSearchTerm(initialSearchTerm);
    setTasks(tasksData);
  }, []);

  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text,
      completed: false,
      description: '',
      updatedAt: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, text, description) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text, description, updatedAt: new Date().toISOString() } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed, updatedAt: new Date().toISOString() } : task
    ));
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    router.push(`/?search=${value}`, undefined, { shallow: true });
  };

  const filteredTasks = tasks.filter(task => 
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Todo List</h1>
      <input 
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search tasks"
        className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
      />
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
      />
    </div>
  );
};

export default Page;
