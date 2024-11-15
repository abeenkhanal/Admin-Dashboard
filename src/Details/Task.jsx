import React from 'react';

const tasks = [
  { id: 1, title: "Wash the car", author: "Bob", status: "Rejected", color: "text-red-500", label: "REJECTED" },
  { id: 2, title: "Task with dropdown menu", author: "Johnny", status: "New", color: "text-blue-500", label: "NEW" },
  { id: 3, title: "Badge on the right task", description: "This task has show on hover actions!", label: "LATEST TASK", color: "text-green-500" },
  { id: 4, title: "Go grocery shopping", description: "A short description for this todo item", imageUrl: "https://images.pexels.com/photos/9783353/pexels-photo-9783353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 5, title: "Development Task", description: "Finish React ToDo List App", priority: 69 },
  { id: 6, title: "Wash the car", author: "Bob", status: "Rejected", color: "text-red-500", label: "REJECTED" },
];

const Task = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg  overflow-hidden">
      <div className="px-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-gray-700 flex items-center">
          <span className="material-icons mr-2">list</span> Tasks List
        </h2>
      </div>

      <div className="overflow-y-auto max-h-80"> {/* Scrollable section */}
        {tasks.map((task, index) => (
          <div key={task.id} className="flex items-start px-6 py-4 border-b hover:bg-gray-50">
            <span className={`w-1 h-6 mr-4 ${index % 2 === 0 ? 'bg-yellow-500' : 'bg-green-500'}`}></span>
            <div className="flex-grow">
              <h3 className="text-gray-800 font-semibold">{task.title}</h3>
              {task.author && <p className="text-sm text-gray-500">Written by {task.author}</p>}
              {task.description && <p className="text-sm text-gray-500">{task.description}</p>}
              {task.imageUrl && (
                <div className="flex items-center mt-2">
                  <img src={task.imageUrl} alt="task" className="w-10 h-10 rounded-full mr-3" />
                  <p className="text-sm text-gray-500">{task.description}</p>
                </div>
              )}
            </div>

            {task.label && (
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${task.color} bg-${task.color.replace('text-', '')}-100`}>
                {task.label}
              </span>
            )}

            {task.priority && (
              <div className="flex items-center ml-4">
                <span className="bg-yellow-100 text-yellow-600 font-bold text-xs rounded-full px-2 py-1">
                  {task.priority}
                </span>
                <span className="material-icons text-green-500 mx-2 cursor-pointer">check</span>
                <span className="material-icons text-red-500 cursor-pointer">delete</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end p-4 border-t">
        <button className="text-gray-500 mr-4">Cancel</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Task</button>
      </div>
    </div>
  );
};

export default Task;