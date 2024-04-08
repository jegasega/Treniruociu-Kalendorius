import React, { Suspense } from "react";
import { Route, Routes } from "react-router";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

const Plans = React.lazy(() => import("./components/plans/Plans"));
const Food = React.lazy(() => import("./components/food/Food"));
const Price = React.lazy(() => import("./components/price/Price"));
const Contact = React.lazy(() => import("./components/contact/Contact"));
const Schedule = React.lazy(() => import("./components/schedule/Schedule"));

const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Suspense>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="plans" element={<Plans />} />
          <Route path="food" element={<Food />} />
          <Route path="price" element={<Price />} />
          <Route path="contact" element={<Contact />} />
          <Route path="schedule" element={<Schedule />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
