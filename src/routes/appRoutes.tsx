import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Article } from '../pages/Article'

export const appRouter = createBrowserRouter(
  createRoutesFromElements([
    <Route element={<Home />} path="/" key="home" />,
    <Route element={<Article />} path="/issues/:id" key="teste" />,
  ]),
)
