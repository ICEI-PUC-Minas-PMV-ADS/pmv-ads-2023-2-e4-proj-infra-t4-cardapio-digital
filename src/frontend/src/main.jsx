import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import HomePage from './pages/Homepage'
import MenuEditor from './pages/MenuEditor'
import RegisterPage from './pages/RegisterPage'
import RestaurantHomePage from './pages/RestaurantHomePage'
import MeusPedidos from "./pages/pedidos"
import './styles/index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <BrowserRouter>
      <Routes>
          {/* Cliente */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/register-client" element={<RegisterPage />} />
          <Route path="/register-restaurant" element={<RegisterPage  />} />
        {/* Cliente */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />

        <Route path="/order" element={<MeusPedidos />} />

        {/* Restaurante */}
        <Route path="/menu-editor" element={<MenuEditor />} />
        <Route path="/restaurant-homepage" element={<RestaurantHomePage />} />
      </Routes>
    </BrowserRouter>
  </>
);
