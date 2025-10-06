import { Outlet } from "react-router";
import Header from "../components/Header";
import { useState, useEffect, useContext } from "react";

export default function MainLayout() {
  return (
    <div>
      <div className="m-auto bg-black">
        <div className="container m-auto mb-3">
          <Header></Header>
        </div>
      </div>
      <main className="container m-auto">
        <Outlet></Outlet>
      </main>
    </div>
  );
}
