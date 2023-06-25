import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import RouteLayout from "./layout/RouteLayout"
import PageNotFound from "./pages/PageNotFound"
import About from "./pages/About"
import Contact from "./pages/Contact"
import News, { newsLoader } from "./pages/News"
import NewsArticle, { articleLoader } from "./pages/NewsArticle"
import Music from "./pages/Music"
import Entertainment from "./pages/Entertainment"
import ArticleLayout from "./layout/ArticleLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<News />} loader={newsLoader} />
      <Route path=":id" element={<NewsArticle />} loader={articleLoader} />
      {/* Nested Route having an issue on how to make it appear*/}
      <Route path="category" element={<ArticleLayout />}>
        <Route path="music" element={<Music />} />
        <Route path="entertainment" element={<Entertainment />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      {/* The error page not found */}
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
