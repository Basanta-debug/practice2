import logo from './logo.svg';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import  {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Container/>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
