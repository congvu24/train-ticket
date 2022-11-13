import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Listpage from "./pages/Listpage";

function App() {
  const router = [
    {
      path: "/list/*",
      element: <Listpage />,
    },
    {
      path: "/trip/*",
      element: <p>trip detail</p>,
    },
    {
      path: "/ticket/*",
      element: <p>ticket detail</p>,
    },
    {
      path: "/",
      element: <Homepage />,
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="min-h-screen">
        <Routes>
          {router.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
