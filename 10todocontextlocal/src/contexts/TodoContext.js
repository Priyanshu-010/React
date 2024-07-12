import { createContext, useContext } from 'react';

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg ",
      completed: false,
    }, {}, {}
  ],
  addTodo: (todo) => { },
  uddatedTodo: (id, todo) => { },
  deleteTodo: (id) => { },
  toggleComplpete: (id) => { }
})

export const useTodo = () => {
  useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;