
import './App.css';
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import TotalBox from "./components/TotalBox";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cart/>
      <TotalBox/>
    </div>
  );
}

export default App;
