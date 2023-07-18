import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Contacts from "./Pages/Contacts/Contacts";
import News from "./Pages/News/News";
import Checkout from "./Pages/Checkout/Checkout";
import Spinner from "./Components/Spinner/Spinner";
import Layout from "./Components/Layout/Layout";
import Register from "./Components/Register/Register";
function App() {
  return (
    <div>
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/detail/:id"
            element={<Layout contentPage={<DetailPage />} />}
          />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/news" element={<News />} />
          <Route path="/checkout/:maLichChieu" element={<Checkout />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to={"/404"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
