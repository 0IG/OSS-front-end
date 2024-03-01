// Library Imports
import { Route, Routes } from "react-router-dom";
import React from "react";
// Component Imports
import NavBar from "./components/navBar/NavBar";
import OpenAi from "./components/openAi/OpenAi";
import Home from "./components/Home/Home";
import GearIndex from "./components/gearIndex/GearIndex";
import ItemDetail from "./components/itemDetail/ItemDetail";
import FourOFour from "./components/404/FourOFour";
import Profile from "./components/accounts/profile/Profile";
import Cart from "./components/accounts/cart/Cart";
import ProgressTracker from "./components/accounts/progress/Progress";
import { CartProvider } from "./components/accounts/cart/cartContext/CartContext";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AuthDetails from "./components/auth/AuthDetails";
import EmptyView from "./components/emptyView/EmptyView";
import { FirebaseAuthProvider } from "./components/accounts/firebaseAuthProvider/FirebaseAuthProvider";
// Page Imports
// -
// Hook Imports
//-
//Styling Imports
// -

export default function App() {
  return (
    <FirebaseAuthProvider>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route
            path="/gear"
            element={<GearIndex key={"Gear index"} />}
          ></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/auth" element={<AuthDetails />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ai" element={<OpenAi />}></Route>
          <Route path="/PT" element={<ProgressTracker />}></Route>
          <Route path="/gear/:productId" element={<ItemDetail />}></Route>
          <Route path="/login" element={<Profile />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/404" element={<FourOFour />} />
          <Route path="/*" element={<FourOFour />} />
          <Route path="/testing" element={<EmptyView />} />
        </Routes>
      </CartProvider>
    </FirebaseAuthProvider>
  );
}
