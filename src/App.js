import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" component={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
