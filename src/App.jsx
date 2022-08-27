import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import CustomerRegister from "./components/CustomerRegister";
import Banners from "./components/Banners";
import Subscribe from "./components/Subscribe";
import CustomerLogin from "./components/CustomerLogin";
import CustomerDashboard from "./components/CustomerDashboard";
import FeaturedBrands from "./components/FeaturedBrands";
import ProductView from "./components/ProductView";
import Cart from "./components/Cart";
import TopCategories from "./components/TopCategories";
// import Footer from "./components/Footer";
import DeliveryGuyDashboard from "./components/DeliveryGuyDashboard";
// import ElectronicDeals from "./components/deals/ElectronicDeals";
// import ForYou from "./components/deals/ForYou";
import RecommendedSellers from "./components/RecommendedSellers";
import { Toaster } from "react-hot-toast";
import Hero from "./components/Hero";
import PrivateRoute from "./components/middleware/PrivateRoute";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import Flashsale from "./components/Flashsale";
import Newarrivals from "./components/Newarrivals";
// import Featured from "./components/Featured";
// import MapComponent from "./components/MapComponent";
import Footer from "./components/Footer";
import SubCategoryProducts from "./components/SubCategoryProducts";
import CategoryProducts from "./components/CategoryProducts";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Banners />
                <Newarrivals />
                <FeaturedBrands />
                <Flashsale />
                <TopCategories />
                {/* <Featured /> */}
                {/* <ForYou /> */}
                <RecommendedSellers />
                {/* <ElectronicDeals /> */}
                <Subscribe />
              </>
            }
          />
          <Route path="/register/customer" element={<CustomerRegister />} />
          <Route path="/login/customer" element={<CustomerLogin />} />
          {/* <Route path="/map" element={<MapComponent />} /> */}

          <Route element={<PrivateRoute />}>
            <Route
              path="/dashboard/customer/*"
              element={<CustomerDashboard />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route
            path="/dashboard/delivery/*"
            element={<DeliveryGuyDashboard />}
          />
          <Route path="/product_view/:id" element={<ProductView />} />
          <Route
            path="/category_prd/:id/:category_name"
            element={<CategoryProducts />}
          />

          <Route
            path="/sub_prd/:id/:sub_name"
            element={<SubCategoryProducts />}
          />

          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
      <Toaster />
    </Router>
  );
}

export default App;
