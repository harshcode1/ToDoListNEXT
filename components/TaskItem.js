import { useState } from 'react';
import { format } from 'date-fns';

const TaskItem = ({ task, onUpdateTask, onDeleteTask, onToggleTask }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [taskText, setTaskText] = useState(task.text);
  const [taskDescription, setTaskDescription] = useState(task.description);

  const handleUpdate = () => {
    onUpdateTask(task.id, taskText, taskDescription);
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 flex-grow">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
            className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
          />
          {isEditing ? (
            <input
              type="text"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              onBlur={handleUpdate}
              onKeyPress={(e) => e.key === 'Enter' && handleUpdate()}
              className="flex-grow border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <span 
              className={`text-lg flex-grow cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {task.text}
            </span>
          )}
        </div>
        <div className="space-x-2 flex-shrink-0">
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            {isEditing ? 'Save' : 'Edit'}
          </button>
          <button 
            onClick={() => onDeleteTask(task.id)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
          >
            Delete
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="px-4 pb-4 text-gray-600">
          {isEditing ? (
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="w-full p-2 border rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add a description"
            />
          ) : (
            <p className="mt-2">{task.description || 'No description provided'}</p>
          )}
          <p className="mt-2 text-sm">Last updated: {format(new Date(task.updatedAt), 'PPpp')}</p>
        </div>
      )}
    </div>
  );
};

export default TaskItem;