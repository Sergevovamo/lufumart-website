import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import CustomerRegister from "./components/CustomerRegister";
import FlashSale from "./components/FlashSale";
import Banners from "./components/Banners";
import Featured from "./components/Featured";
import Subscribe from "./components/Subscribe";
// import GetCustomers from "./components/GetCustomers";
import CustomerLogin from "./components/CustomerLogin";
import CustomerDashboard from "./components/CustomerDashboard";
import FeaturedBrands from "./components/FeaturedBrands";
import Navbar from "./components/Navbar";
import ProductView from "./components/ProductView";
import Cart from "./components/Cart";
import TopCategories from "./components/TopCategories";
import Footer from "./components/Footer";
import MenClothing from "./components/MenClothing";
import DeliveryGuyDashboard from "./components/DeliveryGuyDashboard";
// import CarouselSection from "./components/CarouselSection";
import ElectronicDeals from "./components/deals/ElectronicDeals";
import Checkout from "./components/Checkout";
import ForYou from "./components/deals/ForYou";
// import NewArrivals from "./components/NewArrivals";
import RecommendedSellers from "./components/RecommendedSellers";
import { Toaster } from "react-hot-toast";
// import MegaMenu from "./components/MegaMenu";
// import TestView from "./components/TestView";
import Hero from "./components/Hero";
import SubCategoryView from "./components/SubCategoryView";
import Nav_bar from "./components/Nav_bar";
// import GetCustomers from "./components/GetCustomers";
function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Nav_bar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                {/* <CarouselSection /> */}
                <Banners />
                <FeaturedBrands />
                {/* <NewArrivals /> */}
                <TopCategories />
                {/* <FlashSale /> */}
                <ForYou />
                {/* <Featured /> */}
                <RecommendedSellers />
                {/* <MenClothing /> */}
                <ElectronicDeals />
                <Subscribe />
                {/* <GetCustomers /> */}
              </>
            }
          />
          <Route path="/register/customer" element={<CustomerRegister />} />
          <Route path="/login/customer" element={<CustomerLogin />} />
          <Route path="/dashboard/customer/*" element={<CustomerDashboard />} />
          <Route
            path="/dashboard/delivery/*"
            element={<DeliveryGuyDashboard />}
          />

          <Route path="/product_view/:id" element={<ProductView />} />
          <Route path="/sub-category/:id" element={<SubCategoryView />} />

          {/* <Route path="/test_view/:id" element={<TestView />} /> */}

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/mega" element={<MegaMenu />} /> */}
        </Routes>
        <Footer />
      </div>
      <Toaster />
    </Router>
  );
}

export default App;
