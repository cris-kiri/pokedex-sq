import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import App from './components/App'
import Pokedex from './components/Pokedex'
import Home from './components/Home'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="pokedex" element={<Pokedex />} />
  </Route>
)

export const router = createBrowserRouter(routes)
