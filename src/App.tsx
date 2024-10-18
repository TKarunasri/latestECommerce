import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import ProtectedRoute from "./components/protected-rotue/ProtectedRoute";
import Login from "./pages/login/Login";

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
