import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Listpage from "./pages/Listpage";
import Trippage from "./pages/Trippage";
import PaymentPage from "./pages/Payment";
import TicketPage from "./pages/Ticketpage";

function App() {
  const router = [
    {
      path: "/list/*",
      element: <Listpage />,
    },
    {
      path: "/trip/*",
      element: <Trippage />,
    },
    {
      path: "/payment/:orderId",
      element: <PaymentPage />,
    },
    {
      path: "/ticket/*",
      element: <TicketPage />,
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
