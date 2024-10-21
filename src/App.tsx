import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/protected-rotue/ProtectedRoute";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
