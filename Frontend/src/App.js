import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeScreen from "./screens/home/HomeScreen";
import SearchScreen from "./screens/search/SearchScreen";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CategoryArticles from "./screens/category/CategoryArticles";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Route cho HomeScreen với đường dẫn /trang-chu */}
        <Route path="/trang-chu" element={<HomeScreen />} />

        {/* Route chuyển hướng từ / về /trang-chu */}
        <Route path="/" element={<Navigate to="/trang-chu" replace />} />

        <Route path="/search" element={<SearchScreen />} />
        <Route path="/category/:category" element={<CategoryArticles />} />

        <Route path="/" element={<HomeScreen />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
