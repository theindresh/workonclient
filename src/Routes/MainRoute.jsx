import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../Pages/Home/Navbar";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Home/Portfolio";
import Contact from "../Pages/Home/Contact";
import NoPage from "../Pages/Home/NoPage";
import Popup from '../Pages/task/Popup';
import Counter1 from "../Pages/task/Counter1";
import Card from "../Pages/Home/Card";
import Todolist from '../Pages/vikshsir/Todolist';
import Login from "../Pages/Authentication/Login";
import Signup from "../Pages/Authentication/Signup";
import SetComponent from "../Pages/Nehamam/SetComponent";
import Comp1 from "../Pages/Rahulsir/Comp1";
import Comp2 from "../Pages/Rahulsir/Comp2";
import Comp3 from "../Pages/Rahulsir/Comp3";
import Comp4 from "../Pages/Rahulsir/Comp4";
import Comp5 from "../Pages/Rahulsir/Comp5";
import Addtocart from "../Pages/vikshsir/Addtocart";
import Memo from "../Pages/Alish sir/Memo";
import Calculator from "../Pages/ChatBot/Calculator";
import Debouncing from "../Pages/Debo/Debouncing";
import Portfolio from "../Pages/Home/Portfolio";
function MainRoute() {
  return (
    <BrowserRouter>  
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="popup" element={<Popup />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/count" element ={<Counter1/>}/>
            <Route path="/card" element ={<Card/>}/>
            <Route path="/todo" element ={<Todolist/>}/>
            <Route path="/login" element ={<Login/>}/>
            <Route path="/signup" element ={<Signup/>}/>
            <Route path="/usecontext" element ={<SetComponent/>}/>
            <Route path="/feachuseEffect" element ={<Comp1/>}/>
            <Route path="/feachuseState" element ={<Comp2/>}/>
            <Route path="/feachuseCallback" element ={<Comp3/>}/>
            <Route path="/feachuseReducer" element ={<Comp4/>}/>
            <Route path="/feachuseMemo" element ={<Comp5/>}/>
            <Route path="/addtocart" element ={<Addtocart/>}/>
            <Route path="/usememo" element ={<Memo/>}/>
            <Route path="/cal" element ={<Calculator/>}/>
            <Route path="/debouceing" element ={<Debouncing/>}/>
            <Route path="/portfolio" element ={<Portfolio/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default MainRoute;
