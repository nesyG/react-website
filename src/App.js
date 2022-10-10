import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Image from './components/Hero-Image/Image'


function App() {
  return (
    <div className="App">
      <Header/>
        <div className="hero-content-container">
        <Main/>
        <Image />
        </div>
    </div>
  );
}

export default App;
