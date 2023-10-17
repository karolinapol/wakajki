import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';
import { Navbar } from './components';

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
          <Route path="/login" element={<LoginPage />}></Route>s
        </Routes>
      </Router>
    </>
  );
}

export default App;
