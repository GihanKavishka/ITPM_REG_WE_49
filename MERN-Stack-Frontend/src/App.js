import React from "react";
import Header from "./components/Header";
import { Route, Routes , Navigate} from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/Home";
import AddFood from "./components/AddFood";
import Foods from "./components/Food/Foods";
import Cusfoods from "./components/Food/Cusfoods";
import About from "./components/About";
import FoodDetail from "./components/Food/FoodDetail";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import EditUser from "./pages/editUser/EditUser";
import UserDetails from "./pages/UserDetails/UserDetails";
import AddRoom from "./components/AddRoom";
import Rooms from "./components/Room/Rooms";
import RoomDetail from "./components/Room/RoomDetail";
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
          <Route exact path="/"><Home /></Route>
          <Route path="/users"><UserList /></Route>
          <Route path="/user/:userId"><User /></Route>
          <Route path="/newUser"><NewUser /></Route>
          <Route path="/update/:id" component={EditUser}></Route>
          <Route path="/get/:id" component={UserDetails} />
          <Route path="/home" element={<Home />} exact />
          <Route path="/add" element={<AddFood />} exact />
          <Route path="/foods" element={<Foods />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/foods/:id" element={<FoodDetail />} exact />
          <Route path="/cusfoods" element={<Cusfoods />} exact />
	  <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddRoom />} exact />
          <Route path="/rooms" element={<Rooms />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/rooms/:id" element={<RoomDetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
