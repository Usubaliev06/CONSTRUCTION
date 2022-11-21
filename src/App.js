import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    
<BrowserRouter >
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

   
  );
}

export default App;
