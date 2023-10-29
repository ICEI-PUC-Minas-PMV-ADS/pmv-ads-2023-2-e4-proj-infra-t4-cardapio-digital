import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import HomePage from './pages/Homepage'
import MenuEditor from './pages/MenuEditor'
import MenuPage from './pages/MenuPage'
import RegisterPage from './pages/RegisterPage'
import RestaurantHomePage from './pages/RestaurantHomePage'
import MeusPedidos from "./pages/pedidos"
import './styles/index.css'
// adicionar /:menuId? no menu-page e pegar por useParams
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <BrowserRouter>
      <Routes>
          {/* Cliente */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/register-client" element={<RegisterPage profile='client' />} />
          <Route path="/register-restaurant" element={<RegisterPage profile='restaurant' />} />
        {/* Cliente */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path='/menu-page' element={<MenuPage />} />

        <Route path="/order" element={<MeusPedidos />} />

        {/* Restaurante */}
        <Route path="/menu-editor" element={<MenuEditor />} />
        <Route path="/restaurant-homepage" element={<RestaurantHomePage />} />
      </Routes>
    </BrowserRouter>
  </>
);
