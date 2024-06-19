import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import WelcomePage from "./pages/WelcomePage";
import ErrorPage from "./pages/ErrorPage";
import ConnexionPage from "./pages/ConnexionPage";
import RegisterPage from "./pages/RegisterPage";
import CguPage from "./pages/CguPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";
import RecipeCreationPage from "./pages/RecipeCreationPage";
import ProfilePage from "./pages/ProfilePage";
import SetProfilePage from "./pages/SetProfilePage";
import RecipePage from "./pages/RecipePage";
import AdminPage from "./pages/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "welcome",
        element: <WelcomePage />,
      },
      {
        path: "connexion",
        element: <ConnexionPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },

      {
        path: "cgu",
        element: <CguPage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
      {
        path: "creation-recipe",
        element: <RecipeCreationPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "set-profile",
        element: <SetProfilePage />,
      },
      {
        path: "recipe/:id",
        element: <RecipePage />,
      },
      {
        path: "admin",
        element: <AdminPage />,
      },
    ],
  },
]);

export default router;
