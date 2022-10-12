import { BrowserRouter, Route, Routes } from "react-router-dom"
import OpenRoute from "./Pages/OpenRoute";
// import { useAppState } from "./Redux/Hook";
import Store from "./Pages/MainPages/Store";
import MasterLayout from "./layout/MasterLayout";
import Cart from "./Pages/MainPages/Cart";
import { useEffect } from "react";
import { useAppDispatch } from "./Redux/Hook";
import axios from "axios";
import { initialize } from "./Redux/Slices/userSlice";

const App = () => {

  // const authStatus = useAppState(state => state.user.auth)
  const dispatch = useAppDispatch()
  localStorage.setItem("entryurl", window.location.pathname)
  useEffect(() => {
    axios.get("/user/status")
      .then(res => {
        dispatch(initialize({ auth: res.data.auth, user: res.data.user }))
      })

  },[dispatch])


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
