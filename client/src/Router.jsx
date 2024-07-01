import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

import App from "./App";
import WelcomePage from "./pages/WelcomePage";
import ConnexionPage from "./pages/ConnexionPage";
import RegisterPage from "./pages/RegisterPage";

import Layout from "./Layout";
import CguPage from "./pages/CguPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";
import RecipeCreationPage from "./pages/RecipeCreationPage";
import ProfilePage from "./pages/ProfilePage";
import SetProfilePage from "./pages/SetProfilePage";
import RecipePage from "./pages/RecipePage";
import AdminPage from "./pages/AdminPage";
import AboutPage from "./pages/AboutPage";

const recipeLoader = async ({ params }) => {
  const [recipe, ingredientOfRecipe, toolOfRecipe] = await Promise.all([
    fetch(`http://localhost:3310/api/recipe/${params.id}`).then((res) =>
      res.json()
    ),
    fetch(`http://localhost:3310/api/ingredient/IofR/${params.id}`).then(
      (res) => res.json()
    ),
    fetch(`http://localhost:3310/api/tool/TofR/${params.id}`).then((res) =>
      res.json()
    ),
  ]);

  return [recipe, ingredientOfRecipe, toolOfRecipe];
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
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
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/popote",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
        loader: () => fetch(`http://localhost:3310/api/recipe/`),
      },
      {
        path: "search",
        element: <SearchPage />,
        loader: () => fetch("http://localhost:3310/api/recipe/"),
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
        loader: recipeLoader,
      },
      {
        path: "admin",
        element: <AdminPage />,
      },
    ],
  },
]);

export default router;
