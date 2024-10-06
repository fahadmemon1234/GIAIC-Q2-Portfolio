"use client";
import React, { useState } from "react";
const TodoList = () => {
  const [userName, setUserName] = useState("");

  const [todoList, setTodoList] = useState<string[]>([]);

  //   Add
  const addTodo = (): void => {
    if (userName.trim()) {
      setTodoList([...todoList, userName]);
      setUserName("");
    }
  };

  //   Edit

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState<string>("");

  const handleEdit = (index: number): void => {
    setEditIndex(index);
    setEditValue(todoList[index]);
  };

  const handleSaveEdit = (index: number): void => {
    const updatedList = [...todoList];
    updatedList[index] = editValue;
    setTodoList(updatedList);
    setEditIndex(null); // Exit edit mode
  };

  //   Delete

  const handleDelete = (index: number): void => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
  };
  return (
    <>
      <h2 className="font-bold text-xl text-center pt-5">
        Todo List Created By Fahad Memon
      </h2>

      <div className="max-w-sm md:max-w-md lg:max-w-lg rounded overflow-hidden shadow-lg bg-white m-auto my-14 lg:my-14">
        <div className="px-4 md:px-6 py-4">
          <div className="font-bold text-xl mb-4 text-center">Todo List</div>

          <div className="flex flex-col md:flex-row">
            <input
              className="lg:rounded-tr-none lg:rounded-br-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:rounded-tr-none md:rounded-br-none"
              id="TodoList"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="TodoList"
            ></input>

            <button
              onClick={addTodo}
              className="mt-2 md:mt-0 lg:rounded-tl-none lg:rounded-bl-none shadow bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:rounded-tl-none md:rounded-bl-none"
            >
              Add
            </button>
          </div>

          <div className="pt-6">
            {/* Card start */}
            <div className="max-h-96 overflow-y-scroll scroll-m-1">
              {todoList.length > 0 ? (
                todoList.map((todo, index) => (
                  <div
                    key={index}
                    className="mt-5 mr-2 border border-blue-600 rounded overflow-hidden bg-blue-200 p-4"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                      {editIndex === index ? (
                        <input
                          type="text"
                          className="p-2 border rounded w-full sm:w-auto"
                          id="edit"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                        />
                      ) : (
                        <h3 className="font-medium text-center sm:text-left">
                          {todo}
                        </h3>
                      )}
                      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                        {editIndex === index ? (
                          <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleSaveEdit(index)}
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleEdit(index)}
                          >
                            Edit
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(index)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-500 text-center">
                  No todos added yet.
                </div>
              )}
              {/* Card end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
