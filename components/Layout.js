import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import NotificationBanner from "./NotificationBanner";

export default function Layout({ children }) {
  return (
    <div className="flex bg-[#f0f0f0] flex-col justify-between min-h-screen">
      <Nav />

      <main>
        <NotificationBanner />
        {children}
      </main>
      <Footer />
    </div>
  );
}
