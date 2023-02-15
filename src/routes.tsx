// COMPONENTS
import { Shop } from 'pages/shop/shop';
import { Home } from 'pages/home';
import { DefaultPage } from 'components/defaultPage';
import { AboutUs } from 'pages/aboutUs';
import { NotFound } from 'pages/notFound';

// EXTERNAL
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductPage } from 'pages/productPage';

export function AppRoutes(){
  return (
    <Router>

      <Routes>
        <Route path='/' element={ <DefaultPage /> }>
          <Route index element={<Home/>} />
          <Route path='loja' element={<Shop/>} />
          <Route path='sobre' element={<AboutUs />} />
          <Route path='produto/:id' element={ <ProductPage /> } />
          <Route path='*' element={ <NotFound /> } />
        </Route>
      </Routes>

    </Router>
  );
}