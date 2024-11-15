import React from 'react';

const Chat = () => {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto bg-gray-100 shadow-lg border rounded-lg">
      {/* Header */}
      <div className="px-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-gray-700 flex items-center">
          <span className="material-icons mr-2">list</span> Tasks List
        </h2>
      </div>
      
      {/* Chat area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ maxHeight: '400px' }}>
        <div className="flex justify-end">
          <div className="p-3 rounded-lg bg-blue-500 text-white max-w-xs">
            But I must explain to you how all this mistaken idea...
          </div>
        </div>
        <div className="flex justify-start">
          <div className="p-3 rounded-lg bg-gray-300 text-gray-800 max-w-xs">
            Expound the actual teachings of the great explorer...
          </div>
        </div>
        <div className="flex justify-end">
          <div className="p-3 rounded-lg bg-blue-500 text-white max-w-xs">
            But I must explain to you how all this mistaken idea...
          </div>
        </div>
        <div className="flex justify-start">
          <div className="p-3 rounded-lg bg-gray-300 text-gray-800 max-w-xs">
            Denouncing pleasure and praising pain...
          </div>
        </div>
        <div className="flex justify-end">
          <div className="p-3 rounded-lg bg-blue-500 text-white max-w-xs">
            But I must explain to you how all this mistaken idea...
          </div>
        </div>
        <div className="flex justify-start">
          <div className="p-3 rounded-lg bg-gray-300 text-gray-800 max-w-xs">
            Expound the actual teachings of the great explorer...
          </div>
        </div>
        <div className="flex justify-end">
          <div className="p-3 rounded-lg bg-blue-500 text-white max-w-xs">
            But I must explain to you how all this mistaken idea...
          </div>
        </div>
        <div className="flex justify-start">
          <div className="p-3 rounded-lg bg-gray-300 text-gray-800 max-w-xs">
            Denouncing pleasure and praising pain...
          </div>
        </div>
       
      </div>
      
      {/* Input area */}
      <div className="flex items-center p-4 border-t">
        <input
          type="text"
          placeholder="Write here and hit enter to send..."
          className="flex-1 px-4 py-2 border rounded-l-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
