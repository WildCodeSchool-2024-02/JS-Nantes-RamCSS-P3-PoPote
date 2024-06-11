import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import WelcomePage from "./pages/WelcomePage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <WelcomePage />
      }
    ],
  },
]);

export default router;