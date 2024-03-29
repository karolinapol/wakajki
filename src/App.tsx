import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';
import { Navbar } from './components';
import { CartItemContextProvider } from './contexts';
import { TripPlannerPage } from './pages';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<ErrorPage />}></Route>
          <Route
            path="/"
            element={
              <>
                <Navbar></Navbar>
                <main className="container">
                  <HomePage />
                </main>
              </>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <CartItemContextProvider>
                <Navbar></Navbar>
                <main className="container">
                  <CartPage />
                </main>
              </CartItemContextProvider>
            }
          ></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route
            path="/trip-planner"
            element={
              <>
                <Navbar></Navbar>
                <main className="container">
                  <TripPlannerPage />
                </main>
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
