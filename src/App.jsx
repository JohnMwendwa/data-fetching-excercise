import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Todos, { loader as todosLoader } from "./pages/Todos";
import NewTodo, { action as newTodoAction } from "./pages/NewTodo";
import TodoDetails, {
  loader as todoDetailsLoader,
  action as todoDetailsAction,
} from "./pages/TodoDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Todos />,
      loader: todosLoader,
      children: [
        {
          path: "new",
          element: <NewTodo />,
          action: newTodoAction,
        },
        {
          path: ":id",
          element: <TodoDetails />,
          loader: todoDetailsLoader,
          action: todoDetailsAction,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
