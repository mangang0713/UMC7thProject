import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/root-layout";
import NotFound from "./pages/not-found";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import Search from "./pages/search/search";
import Movies from "./pages/movies/index";
import NowPlaying from "./pages/movies/now-playing";
import Popular from "./pages/movies/popular";
import TopRated from "./pages/movies/top-rated";
import UpComing from "./pages/movies/up-coming";
import MovieDetail from "./pages/movies/movieDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movies/now-playing",
        element: <NowPlaying />,
      },
      {
        path: "/movies/popular",
        element: <Popular />,
      },
      {
        path: "/movies/top-rated",
        element: <TopRated />,
      },
      {
        path: "/movies/up-coming",
        element: <UpComing />,
      },
      {
        path: "/movie/:movieId",
        element: <MovieDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
