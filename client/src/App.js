import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className='py-3'>
          
          <Container>
          <Routes>
              <Route path='/' element={<HomeScreen />} exact />
              <Route path='/product/:id' element={<ProductScreen/>} />
            </Routes>
          </Container>
          
        </main>
        {/* Footer should be outside of Routes */}
        <Footer />
      </Router>
    </>
  );
}

export default App;

//this is my app.js
