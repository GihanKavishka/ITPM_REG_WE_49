import React from "react";
import Header from "./components/Header";
import { Route, Routes , Navigate} from "react-router-dom";


import Home from "./components/Home";
import AddFood from "./components/AddFood";
import Foods from "./components/Food/Foods";
import Cusfoods from "./components/Food/Cusfoods";
import About from "./components/About";
import FoodDetail from "./components/Food/FoodDetail";
function App() {
  
  const user = localStorage.getItem("token");


  return (

    
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
        
			    />
		
          <Route path="/home" element={<Home />} exact />
          <Route path="/add" element={<AddFood />} exact />
          <Route path="/foods" element={<Foods />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/foods/:id" element={<FoodDetail />} exact />
          <Route path="/cusfoods" element={<Cusfoods />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
