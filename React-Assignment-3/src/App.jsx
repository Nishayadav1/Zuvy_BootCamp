import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Login from "./components/Login";
// import Slider from "./components/Slider";


function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div>
        <h1 style={{ textAlign: "center",backgroundColor:"#cc6f7a",color:"white" ,width:"100vw" }}>Shopping App</h1>
        <Login />
          {/* <Cart /> */}
          {/* <Slider/> */}
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
