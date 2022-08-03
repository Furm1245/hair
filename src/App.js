import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Wrapper from './components/Wrapper/Wrapper';
import HomePage from './components/Home/Home';
import Footer from './components/Wrapper/Footer'
import ProductPage from './components/Pages/ProductPage';


function App() {

  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/collections/:title/:productId" element={<ProductPage />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;