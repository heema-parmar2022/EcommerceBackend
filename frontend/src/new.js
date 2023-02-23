import './App.css';
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import { BrowserRouter as Router ,Route ,Routes ,Outlet, Navigate  } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react"; 
import { useEffect, useState } from "react";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from './component/User/LoginSignUp';
import store from "./store";
import { loadUser } from './actions/userAction';
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile"
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from './component/Cart/Cart';
import Shipping from './component/Cart/Shipping';
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from './component/Cart/Payment';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  const StripeLayout = ({ stripeApiKey }) => {
    return stripeApiKey
      ? <Outlet />
      : <Navigate to="/" replace />
  };

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => { 
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);
  return (
    <Router>
    <Header />

    {isAuthenticated && <UserOptions user={user} />}
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/product/:id" element={<ProductDetails />} />
    <Route exact path="/products" element={<Products />} />
    <Route  path="/products/:keyword" element={<Products />} />

    <Route exact path="/search" element={<Search />} />
    <Route exact path="/login" element={<LoginSignUp />} />
    <Route exact path="/account" element={<Profile />} />

    <Route exact path="/me/update" element={<UpdateProfile />} />
    <Route exact path="/password/update" element={<UpdatePassword />} />
    <Route exact path="/password/forgot" element={<ForgotPassword />} />
    <Route exact path="/password/reset/:token" element={<ResetPassword />} />

    <Route exact path="/cart" element={<Cart />} />
    <Route exact path="/shipping" element={<Shipping />} />
    <Route exact path="/order/confirm" element={<ConfirmOrder />} />
    {/* <Route exact path="/process/payment" element={<Payment />} /> */}
    {/* { <Elements stripe={loadStripe(stripeApiKey)}>
    <Route exact path="/process/payment" element={<Payment />} />
    </Elements> } */}

<Route element={<StripeLayout {...{ stripeApiKey }} />}>
    <Route
      path="/process/payment"
      element={(
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Payment />
        </Elements>
      )}
    />
  </Route>

    </Routes>
    <Footer />
    </Router>
  );
}

export default App;
