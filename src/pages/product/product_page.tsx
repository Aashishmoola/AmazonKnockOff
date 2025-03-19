import {Outlet } from "react-router-dom";


export function ProductPage() {
  return (
    <>
      <Outlet />
    </>
  );
}

// Link tags (as an naviagtion bar) to direct to correct subcategory page based on category in url when defined here
// should use relative paths (relative to ~/products), but since instead it is defined in navBar, it has to be defined relative to root
// as there is root nesting within App.jsx
