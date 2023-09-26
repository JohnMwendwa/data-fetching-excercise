import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Todos, { loader as todosLoader } from "./pages/Todos";
import NewTodo, { action as newTodoAction } from "./pages/NewTodo";
import TodoDetails, {
  loader as todoDetailsLoader,
  action as todoDetailsAction,
} from "./pages/TodoDetails";
import Error from "./pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Todos />,
      loader: todosLoader,
      errorElement: <Error />,
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
