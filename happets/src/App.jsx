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
import Ids from './pages/Ids'
import Pretales from './pages/Pretales'
import Compras from './pages/Compras'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="collares" element={<Collares />} />
      <Route path="correas" element={<Correas />} />
      <Route path="ids" element={<Ids />} />
      <Route path="pretales" element={<Pretales />} />
      <Route path="compras" element={<Compras />} />
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
