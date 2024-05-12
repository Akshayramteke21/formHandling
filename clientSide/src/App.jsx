import Header from "./components/Header";
import Register from "./components/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Header/>
      
      <BrowserRouter>
         <Routes>



          <Route path="/" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>

         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
