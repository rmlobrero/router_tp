import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Router Tutorial</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/bicicletas">Bicicletas</Link>
      </nav>
      <Outlet />
    </div>
  );
}