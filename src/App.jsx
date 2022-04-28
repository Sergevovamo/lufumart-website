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
import BestSellers from "./components/BestSellers";
import Footer from "./components/Footer";
import MenClothing from "./components/MenClothing";
import DeliveryGuyDashboard from "./components/DeliveryGuyDashboard";
import Checkout from "./components/Checkout";
import CarouselSection from "./components/CarouselSection";
import ElectronicDeals from "./components/deals/ElectronicDeals";
import NewArrivals from "./components/deals/NewArrivals";

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
                                <CarouselSection />
                                <Banners />
                                <FeaturedBrands />
                                <FlashSale />
                                <TopCategories />
                                <NewArrivals />
                                <Featured />
                                <BestSellers />
                                <MenClothing />
                                <ElectronicDeals />
                                <Subscribe />
                                {/* <GetCustomers /> */}
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/register/customer"
                        element={<CustomerRegister />}
                    />
                    <Route path="/login/customer" element={<CustomerLogin />} />
                    <Route
                        path="/dashboard/customer/*"
                        element={<CustomerDashboard />}
                    />
                    <Route
                        path="/dashboard/delivery/*"
                        element={<DeliveryGuyDashboard />}
                    />
                    <Route path="/checkout/" element={<Checkout />} />
                    <Route path="/product_view/:id" element={<ProductView />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
