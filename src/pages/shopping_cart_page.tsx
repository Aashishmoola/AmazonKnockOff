import { Link, useParams, Outlet } from "react-router-dom";

export function ShoppingCartPage() {
  return (
    <>
      <h1>This is the Shopping Cart Page</h1>
      <div>
        Shopping Page NavBar
        <ul>
          <li>
            <Link to="cartCheckoutSubPage">CheckOut</Link>
          </li>
          <li>
            <Link to="cartOverViewSubPage">Overview</Link>
          </li>
          <Outlet />
        </ul>
      </div>
    </>
  );
}

export function DisplaySubPage() {
  const { shoppingCartSubPage } = useParams();
  return <h1>{shoppingCartSubPage}</h1>;
}
