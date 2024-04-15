import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './user/Layout/Layout';
import './App.css';
import './index.css';
import AboutUs from './user/AboutUs/AboutUs'
import Contact from './user/Contact/Contact';
import Register from './user/Register/Register';
import Login from './user/Login/Login';
import Banner from './user/Banner/Banner';
import Menu from './user/Menu';
import AdminLayout from './Admin/AdminLayout/AdminLayout';
import Hotel from './Admin/Hotel/Hotel';
import Adminreg from './Admin/Adminreg/Adminreg';
import AdminLogin from './Admin/Adminreg/Adminlogin';
import AdminProfile from './Admin/AdminProfile/AdminProfile';
import UsersAdmin from './Admin/UsersAdmin/UsersAdmin';
import ProductAdd from './Admin/AdminProduct/ProductAdd';
import ViewHotel from './Admin/Hotel/ViewHotel';
import Footer from './user/Footer/Footer';
import ViewProduct from './Admin/AdminProduct/viewproduct';
import Menulist from './user/Menulist/Menulist';
import AddtoCart from './user/Menulist/AddtoCart';
import OrderMenu from './user/Menulist/OrderMenu';
import Payment from './user/Menulist/Payment';
import Orders from "./user/Orders"
import OrdersByUser from "./Admin/OrdersByUser.jsx"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* user area */}
          <Route path='/' element={<Layout/>} > 
          {/*  */}
          <Route path='/' element={<Banner/>} />
          <Route path='menu' element={<Menu/>} />
          <Route path='menulist' element={<Menulist/>} />
          <Route path='cart' element={<AddtoCart/>} />
          <Route path='ordermenu' element={<OrderMenu/>} />
          <Route path='payment' element={<Payment/>} />
          <Route path='aboutus' element={<AboutUs/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='footer' element={<Footer/>} />
          <Route path='orders' element={<Orders/>} />
          {/*  */}
          </Route> 
          {/* user area */}


          {/* user login and signup */}
          <Route path='/Register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          {/* user login and signup */}

          {/* Admin login and signup */}
          <Route path='/adminregister' element={<Adminreg/>} />
          <Route path='/adminlogin' element={<AdminLogin/>} />
          {/* Admin login and signup */}


          {/* admin area */}
          <Route path='/admin' element={<AdminLayout/>}>
          <Route index element={<AdminProfile/>}/>
          <Route path='hotel' element={<Hotel/>}/>
          <Route path='viewhotel' element={<ViewHotel/>}/>
          <Route path='user' element={<UsersAdmin/>}/>
          <Route path='product' element={<ProductAdd/>}/>
          <Route path='order' element={<ProductAdd/>}/>
          <Route path='order/:id' element={<OrdersByUser/>}/>
          <Route path='viewproduct' element={<ViewProduct/>}/>
          
          </Route>
          {/* admin area */}

           
          
          
        </Routes> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
