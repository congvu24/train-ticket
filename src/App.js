import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, Route, Router } from "react-router-dom";

function App() {
  const router = [
    {
      path: "/list/:from/:to/:date",
      element: <p>List trip</p>,
    },
    {
      path: "/trip/:id",
      element: <p>trip detail</p>,
    },
    {
      path: "/ticket/:id",
      element: <p>ticket detail</p>,
    },
  ];

  return (
    <div className="App">
      <Router>
        {router.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Router>
    </div>
  );
}

export default App;
