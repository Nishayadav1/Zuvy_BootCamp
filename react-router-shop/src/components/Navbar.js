import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#eee" }}>
      <Link to="/">Products</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

export default Navbar;
