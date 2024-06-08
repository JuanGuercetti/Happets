import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// Pages
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Collares from './pages/Collares'
import Correas from './pages/Correas'
import Pretales from './pages/Pretales'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* Sacar RooyLayout y que vaya directo al Home.jsx? */}
      <Route index element={<Home />} />
      <Route path="collares" element={<Collares />} />
      <Route path="correas" element={<Correas />} />
      <Route path="pretales" element={<Pretales />} />
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
