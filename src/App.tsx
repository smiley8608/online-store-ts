import { BrowserRouter, Route, Routes } from "react-router-dom"
import OpenRoute from "./Pages/OpenRoute";
// import { useAppState } from "./Redux/Hook";
import Store from "./Pages/MainPages/Store";
import MasterLayout from "./layout/MasterLayout";
import Cart from "./Pages/MainPages/Cart";

function App() {

  // const authStatus = useAppState(state => state.user.auth)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/u/*" element={<MasterLayout />} />
        <Route index element={<Store />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/*" element={<OpenRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
