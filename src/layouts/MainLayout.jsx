import { Outlet } from "react-router";
import Header from "../components/Header";
import { useState, useEffect, useContext } from "react";



export default function MainLayout() {
  return (
    <div className="container m-auto">
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}
