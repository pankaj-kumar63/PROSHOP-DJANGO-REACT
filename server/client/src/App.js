import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { Container } from 'react-bootstrap';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import EditUserScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
          <Routes>
              <Route path='/' element={<HomeScreen />} exact />
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/register' element={<RegisterScreen />} />
              <Route path='/profile' element={<ProfileScreen />} />
              <Route path='/product/:id' element={<ProductScreen/>} />
              <Route path='/cart/:id?' element={<CartScreen/>} />
              <Route path='/shipping' element={<ShippingScreen/>} />
              <Route path='/payment' element={<PaymentScreen/>} /> 
              <Route path='/placeorder' element={<PlaceOrderScreen/>} /> 
              <Route path='/order/:id' element={<OrderScreen/>} /> 
              <Route path = '/admin/orders' element = {<OrderListScreen/>}/>

              <Route path = '/admin/userlist' element = {<UserListScreen/>}/>
              <Route path = '/admin/productlist' element = {<ProductListScreen/>}/>
              <Route path = '/admin/user/:id/edit' element = {<EditUserScreen/>}/>
              <Route path = '/admin/product/:id/edit' element = {<ProductEditScreen/>}/>


            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;

//this is my app.js
