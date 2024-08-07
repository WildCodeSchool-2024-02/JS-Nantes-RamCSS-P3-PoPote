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

import RecipePage from "./pages/RecipePage";
import AboutPage from "./pages/AboutPage";

const recipeLoader = async ({ params }) => {
  const [recipe, ingredientOfRecipe, toolOfRecipe] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/api/recipe/${params.id}`).then(
      (res) => res.json()
    ),
    fetch(
      `${import.meta.env.VITE_API_URL}/api/ingredient/IofR/${params.id}`
    ).then((res) => res.json()),
    fetch(`${import.meta.env.VITE_API_URL}/api/tool/TofR/${params.id}`).then(
      (res) => res.json()
    ),
  ]);

  return [recipe, ingredientOfRecipe, toolOfRecipe];
};

const IngToolLoader = async () => {
  const [recipeIngCreate, recipeToolCreate] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/api/ingredient/`).then((res) =>
      res.json()
    ),
    fetch(`${import.meta.env.VITE_API_URL}/api/tool/`).then((res) =>
      res.json()
    ),
  ]);

  return [recipeIngCreate, recipeToolCreate];
};

const profileLoader = async () => {
  const userId = localStorage.getItem("userId");
  try {
    const [recipes, user, adminRecipe] = await Promise.all([
      fetch(`${import.meta.env.VITE_API_URL}/api/recipe/user/${userId}`).then(
        (res) => {
          if (!res.ok) {
            return [];
          }
          return res.json();
        }
      ),
      fetch(`${import.meta.env.VITE_API_URL}/api/user/${userId}`).then((res) =>
        res.json()
      ),
      fetch(`${import.meta.env.VITE_API_URL}/api/recipe/`).then((res) =>
        res.json()
      ),
    ]);

    return { recipes, user, adminRecipe };
  } catch (error) {
    return { recipes: [], user: null, adminRecipe: [] };
  }
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
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/api/recipe`),
      },
      {
        path: "search",
        element: <SearchPage />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/api/recipe`),
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
      {
        path: "creation-recipe",
        element: <RecipeCreationPage />,
        loader: IngToolLoader,
      },
      {
        path: "profile",
        element: <ProfilePage />,
        loader: profileLoader,
      },

      {
        path: "recipe/:id",
        element: <RecipePage />,
        loader: recipeLoader,
      },
    ],
  },
]);

export default router;
